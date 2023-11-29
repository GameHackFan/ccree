import { objectUtil } from '../data/default/ObjectUtil';
import { patchMap } from "../data/patch/PatchMap";
import { randomizerData } from "../data/randomizer/RandomizerData";
import { enemyByteMap } from "../data/byte/EnemyByteMap";
import { patchService } from "./PatchService";
import { forbiddenService } from "./ForbiddenService";
import { romService } from "./ROMService";
import { modificationService } from './ModificationService';


class RandomizerService
{
  createRandomizerPatch = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixDataMap();
    const randomizedData = this.randomizeAllEnemies();
    const patch = {};
    patch.type = "overwrite";
    patch.filename = "cce_re.10f";
    patch.byteFormat = "hex";
    patch.data = randomizedData.patch;
    return patch;
  }

  randomizeAllEnemies = () =>
  {
    const seed = dataMap.seed;
    const randomizer = this.mulberry32Randomizer(seed);
    const rdegs = randomizerData.enemyGroups;
    const randomizedData = {preset: {}, patch: {}};

    Object.keys(rdegs).forEach((lk) =>
    {
      const rdl = rdegs[lk];
      const presetLevel = this.forceGetField(randomizedData.preset, lk);

      Object.keys(rdl).forEach((egk) =>
      {
        const rdeg = rdl[egk];

        if(rdeg.disabled)
          return;

        const enemies = this.randomizeEnemiesForGroup(lk, egk, randomizer);
        this.randomlyRemoveEnemiesOverLimit(rdeg, enemies, randomizer);
        this.addExtraEnemies(lk, rdeg, enemies, randomizer);
        presetLevel[egk] = this.createFixedEnemyGroupPreset(enemies.preset);
        const ids = Object.keys(enemies.patch);
        this.addBossHelperSpawnDelayTime(rdeg, enemies);

        if(ids.length > 0)
        {
          const p = randomizedData.patch;
          this.updateRandomizerPatchData(lk, rdeg, p);
          this.addEnemiesBytesToPatch(rdeg, p, enemies.patch);
          
        }
      });
    });

    return randomizedData;
  }

  randomizeEnemiesForGroup = (levelKey, enemyGroupKey, randomizer) =>
  {
    const enemies = {preset: {}, patch: {}};
    const mdeg = dataMap[levelKey][enemyGroupKey];
    const rdld = randomizerData.enemyGroups[levelKey];
    const rdes = randomizerData.enemyStrategy;
    const enemyGroup = rdld[enemyGroupKey];
    let enemyStrategy, amount, enemy, bytes;
    let enemyList = [];

    randomizerData.enemyStrategyList.forEach((e) =>
    {
      enemyStrategy = rdes[e];
      amount = mdeg[e];
      amount = isNaN(amount) ? 0 : amount;

      for(let i = 0; i < amount; i++)
      {
        enemy = this.randomizeEnemy(enemyGroup, enemyStrategy, randomizer);
        enemyList.push(enemy);
      }
    });
    enemyList = this.getFixedOrderEnemies(enemyList, enemyGroup, randomizer);

    for(let i = 0; i < enemyList.length; i++)
    {
      const key = (i + 10).toString();
      enemy = enemyList[i];
      bytes = this.convertEnemyDataToBytes(enemy);
      enemies.preset[key] = enemy;
      enemies.patch[key] = bytes;
    }

    return enemies;
  }

  addExtraEnemies = (levelKey, enemyGroup, enemies, randomizer) =>
  {
    const amount = extraAmountMap[dataMap?.randomProfile ?? ""] ?? 0;
    const r = randomizer;
    const eg = enemyGroup;

    if(amount > 0 && enemyGroup.key === "bossHelperGroup1")
    {
      const bl = extraBossMap[levelKey];
      let blIndex = this.getRandomIntValue(r, 0, bl.length - 1);

      for(let i = 0; i < amount; i++)
      {
        const key = i.toString();
        const e = {enemyKey: bl[blIndex++ & (bl.length - 1)]};
        let posMin = enemyGroup.screenPositionStart - 32;
        let posMax = enemyGroup.screenPositionStart - 24;
        e.triggerPosition = this.randomizeSpawnTriggerPosition(eg, r);
        e.positionX = this.getRandomIntValue(randomizer, posMin, posMax);
        e.positionY = eg.walkablePositionYTop;
        enemies.preset[key] = e;
        enemies.patch[key] = this.convertEnemyDataToBytes(e);
      }
    }
  }

  randomizeEnemy = (enemyGroup, enemyStrategy, randomizer) =>
  {
    const e = {};
    const r = randomizer;
    const eg = enemyGroup;
    e.enemyKey = this.randomizeEnemyKey(eg, enemyStrategy, r);
    e.triggerPosition = this.randomizeSpawnTriggerPosition(eg, r);
    e.positionX = this.randomizePositionX(e.enemyKey, e.triggerPosition, eg, r);
    e.positionY = this.randomizePositionY(eg, r);
    e.speed = this.randomizeFallingDrumcanSpeed(e.enemyKey, r);
    e.spawnDelayTime = 30;
    e.lockGroupSpawn = eg.mustHaveSpawnDelayTime === true;

    // Extra data to help generate the correct bytes.
    const shift = enemyGroup.walkablePositionForceShift;
    e.positionYShift = shift ? shift : 0;
    return e;
  }

  randomizePositionX = (enemyKey, triggerPosition, enemyGroup, randomizer) =>
  {
    const frl = enemyGroup.forbiddenRangeList;
    const rl = forbiddenService.getValidPositionRangeList(enemyKey, enemyGroup, frl);
    const keys = Object.keys(rl);
    const random = this.getRandomIntValue(randomizer, 0, keys.length - 1);
    const range = rl[keys[random]];
    const px = this.getRandomIntValue(randomizer, range[0], range[1]);
    let shift = enemyGroup.hasElevator ? 0 : triggerPosition;
    return px + shift;
  }

  randomizePositionY = (enemyGroup, randomizer) =>
  {
    return this.getRandomIntValue(randomizer,
        enemyGroup.walkablePositionYBottom,
        enemyGroup.walkablePositionYTop);
  }

  randomizeFallingDrumcanSpeed = (enemyKey, randomizer) =>
  {
    const fd = enemyKey.includes("fallingDrumcan");
    return fd ? this.getRandomIntValue(randomizer, 1, 2) : 0;
  }

  randomizeSpawnTriggerPosition = (enemyGroup, randomizer) =>
  {
    const eg = enemyGroup;
    const min = eg.hasElevator ? eg.screenPositionEnd : eg.screenPositionStart;
    const max = eg.hasElevator ? eg.screenPositionStart : eg.screenPositionEnd;
    return this.getRandomIntValue(randomizer, min, max);
  }

  randomlyRemoveEnemiesOverLimit = (enemyGroup, enemies, randomizer) =>
  {
    let fields = Object.keys(enemies.patch);

    while(fields.length > enemyGroup.maxAmount)
    {
      const random = this.getRandomIntValue(randomizer, 0, fields.length - 1);
      const key = fields[random];
      delete enemies.patch[key];
      delete enemies.preset[key]
      fields = Object.keys(enemies.patch);
    }
  }

  randomizeEnemyKey = (enemyGroup, enemyStrategy, randomizer) =>
  {
    const fekl = enemyGroup.forbiddenEnemyKeys;
    const ekl = enemyStrategy.enemyKeys;
    const veil = forbiddenService.getValidEnemyIndexList(ekl, fekl);
    let random = this.getRandomIntValue(randomizer, 0, veil.length - 1);
    let ek = ekl[veil[random]];

    if(ek ? false : true)
    {
      const strategy = randomizerData.enemyStrategy.enemiesInside;
      const max =  strategy.enemyKeys.length - 1;
      random = this.getRandomIntValue(randomizer, 0, max);
      ek = strategy.enemyKeys[random];
    }
    
    return ek;
  }

  convertEnemyDataToBytes = (enemy) =>
  {
    let aux = parseInt(enemy.positionX);
    const posX = !isNaN(aux) && aux > 0 ? aux : 0;
    const posY = enemy.positionY + (enemy.positionYShift ?? 0);
    const sd = enemy.lockGroupSpawn ? enemy.spawnDelayTime : enemy.triggerPosition;

    const enemyBytes = enemyByteMap[enemy.enemyKey].slice();
    const hexTP = romService.convertNumberToROMBytes(sd, 2);
    const hexPX = romService.convertNumberToROMBytes(posX, 2);
    const hexPY = romService.convertNumberToROMBytes(posY, 2);
    
    enemyBytes[2] = hexTP[0];
    enemyBytes[3] = hexTP[1];
    
    enemyBytes[4] = hexPX[0];
    enemyBytes[5] = hexPX[1];

    enemyBytes[8] = hexPY[0];
    enemyBytes[9] = hexPY[1];

    // Some postures or objects might have dynamic look direction
    if(enemyBytes[23] === "RR")
    {
      let mr = enemy.positionX < (enemy.triggerPosition + 192);

      if(enemy.enemyKey.includes("fallingDrumcan"))
      {
        // NOTE: Left side was 256 - enemy.speed
        const speed = mr ? enemy.speed : (255 - enemy.speed); 
        enemyBytes[22] = speed.toString(16).padStart(2, '0');
        enemyBytes[23] = mr ? "00" : "FF";
      }
      else
        enemyBytes[23] = mr ? "20" : "00";
    }

    // This fixes the spawn code to be called
    if(enemy.lockGroupSpawn)
      enemyBytes[0] = (parseInt(enemyBytes[0], 16) + 0x40).toString(16);

    return enemyBytes;
  }

  updateRandomizerPatchData = (levelKey, enemyGroup, randomizerPatch) =>
  {
    const index = enemyGroup.groupReplaceIndex.toString();
    const bytes = randomizerPatch[index];

    if(!bytes)
    {
      const key = randomizerData.levels[levelKey]?.patchKey;
      const patchData = patchService.get(key);
      const sv = lockEndMap[dataMap?.randomProfile ?? ""] ?? "03";
      const pd = patchData.patch.data[index];
      randomizerPatch[index] = pd.map((d) => lockEndSet.has(d) ? sv : d);
    }
  }

  addEnemiesBytesToPatch = (enemyGroup, randomizerPatch, enemiesBytes) =>
  {
    const index = enemyGroup.groupReplaceIndex.toString();
    const symbol = enemyGroup.groupReplaceByteSymbol;
    const bytes = randomizerPatch[index];
    const symbolIndex = bytes?.indexOf(symbol) ?? -1;
    const ebk = Object.keys(enemiesBytes);
    let allBytes = [];
    ebk.sort();
    ebk.forEach((key) => allBytes = allBytes.concat(enemiesBytes[key]));

    if(bytes && symbolIndex > -1)
    {
      let newBytes = bytes.slice(0, symbolIndex - 23).concat(allBytes);
      newBytes = newBytes.concat(bytes.slice(symbolIndex + 1, bytes.length));
      randomizerPatch[index] = newBytes;
    }
  }

  applyRandomizer = () =>
  {
    
    romService.applyPatch(patchMap.customStage1Patch.patch);
    romService.applyPatch(patchMap.customStage2Patch.patch);
    romService.applyPatch(patchMap.customStage3Patch.patch);
    romService.applyPatch(patchMap.customStage4Patch.patch);
    // romService.applyPatch(patchMap.customStage5Patch.patch);
    romService.applyPatch(patchMap.customStage6Patch.patch);
    romService.applyPatch(patchMap.customStage7Patch.patch);
    romService.applyPatch(patchMap.customStage8Patch.patch);
    romService.applyPatch(patchMap.customStage9Patch.patch);
    romService.applyPatch(patchMap.featuresPatch.patch);
    romService.applyPatch(patchMap.deactivateDefaultBossHelperGroupPatch.patch);
    romService.applyPatch(patchMap.foodHealImprovementPatch.patch);
    romService.applyPatch(patchMap.itemDropImprovementPatch.patch);
    romService.applyPatch(this.getRandomizerHealthPatch());
    romService.applyPatch(this.createRandomizerPatch());
    romService.applyPatch(this.createRandomizerTextPatch());
  }

  getCustomRandomProfileEnemyGroup = (levelKey, groupKey) =>
  {
    if(levelKey && groupKey)
    {
      const crp = randomizerData.randomProfile.custom;
      const l = this.forceGetField(crp, levelKey);
      return this.forceGetField(l, groupKey);
    }
    
    return {};
  }

  forceGetField = (object, field) =>
  {
    if(field)
    {
      const content = object[field];

      if(!content)
      {
        object[field] = {};
        return object[field];
      }

      return content;
    }

    return {};
  }

  getField = (object, field) =>
  {
    const content = field ? object[field] : {};
    return content ? content : {};
  }

  fixSeed = () =>
  {
    let s = parseInt(dataMap.seed);
    s = isNaN(s) ? 0 : s;
    s = Math.max(s, Number.MIN_SAFE_INTEGER);
    s = Math.min(s, Number.MAX_SAFE_INTEGER);
    dataMap.seed = s;
  }

  fixRandomProfile = () =>
  {
    let rp = dataMap.randomProfile;
    rp = rp in randomizerData.randomProfile ? rp : "wild";
    dataMap.randomProfile = rp;
  }

  getSeed = () =>
  {
    return dataMap.seed;
  }

  setSeed = (seed) =>
  {
    dataMap.seed = seed;
  }

  getRandomProfile = () =>
  {
    return dataMap.randomProfile;
  }

  setRandomProfile = (randomProfile) =>
  {
    dataMap.randomProfile = randomProfile;
  }

  setEnemyGroupMaxAmount = (levelKey, groupKey, strategyKey, amount) =>
  {
    const rp = randomizerData.randomProfile.custom;
    const l = this.forceGetField(rp, levelKey);
    const g = this.forceGetField(l, groupKey);
    const s = this.forceGetField(g, strategyKey);
    s.randomMaxAmount = amount;
  }

  setEnemyGroupMinAmount = (levelKey, groupKey, strategyKey, amount) =>
  {
    const rp = randomizerData.randomProfile.custom;
    const l = this.forceGetField(rp, levelKey);
    const g = this.forceGetField(l, groupKey);
    const s = this.forceGetField(g, strategyKey);
    s.randomMinAmount = amount;
  }

  getDateNowInMilliseconds = () =>
  {
    return Date.now().valueOf();
  }

  getRandomIntValue = (randomizer, begin, end) =>
  {
    const b = parseInt(begin);
    const e = parseInt(end);
    const amount = Math.abs(e - b);

    if(amount !== 0)
      return Math.round(randomizer() * amount) + b;

    return begin;
  }

  fixDataMap = () =>
  {
    const rdegs = randomizerData.enemyGroups;
    const seed = dataMap.seed;
    const randomizer = this.mulberry32Randomizer(seed);
    const dmrp = dataMap.randomProfile;
    const randomProfile = randomizerData.randomProfile[dmrp];
    Object.keys(rdegs).forEach((e) =>
    {
      this.fixLevel(e, randomProfile, randomizer);
    });
  }

  fixLevel = (levelKey, randomProfile, randomizer) =>
  {
    const mdl = this.forceGetField(dataMap, levelKey);
    const rdl = randomizerData.enemyGroups[levelKey];

    Object.keys(rdl).forEach((egk) =>
    {
      const rdeg = rdl[egk];
      let sts;

      if(dataMap.randomProfile === "custom")
      {
        sts = randomProfile[levelKey];
        sts = sts ? sts[egk] : {};
        sts = sts ? sts : {};
      }
      else
      {
        sts = randomProfile[rdeg.specialStrategy];
        sts = sts ? sts : randomProfile.enemyStrategy;
      }

      this.fixEnemyGroup(egk, mdl, sts, randomizer);
    });
  }

  fixEnemyGroup = (enemyGroupKey,
      dataMapLevel, randomStrategies, randomizer) =>
  {
    const eg = this.forceGetField(dataMapLevel, enemyGroupKey);
    objectUtil.removeAllProperties(eg);
    let total = 0;
    Object.keys(randomStrategies).forEach((e) =>
    {
      const es = randomStrategies[e];
      let min = parseInt(es.randomMinAmount);
      let max = parseInt(es.randomMaxAmount);
      min = (isNaN(min)) ? 0 : min;
      max = (isNaN(max) || max < 0) ? 0 : max;
      min = (max - min) < 0 ? 0 : min;
      max = (max - min) < 0 ? 0 : max;
      const amount = Math.max(0, this.getRandomIntValue(randomizer, min, max));
      total += amount;
      eg[e] = amount;
    });
    
    if(total < 1)
      eg.enemiesFall = 1;
  }

  createFixedEnemyGroupPreset = (enemyGroupPreset) =>
  {
    const fixed = {};
    let index = 0;
    const keys = Object.keys(enemyGroupPreset);
    keys.sort().forEach((key) =>
    {
      const enemy = enemyGroupPreset[key];
      enemy.id = index;
      fixed[index++] = enemy;
    });
    return fixed;
  }

  getFixedOrderEnemies = (enemyList, enemyGroup, randomizer) =>
  {
    if(enemyGroup.mustHaveSpawnDelayTime === true)
    {
      const shuffle = enemyGroup.forbiddenShuffle ? false : true;
      return shuffle ? this.shuffle(enemyList, randomizer) : enemyList;
    }
    else
      enemyList.sort(this.sortAscending);

    return enemyList.slice();
  }

  addBossHelperSpawnDelayTime = (enemyGroup, enemies) =>
  {
    const sdt = enemyGroup.groupStartSpawnDelay;

    if(sdt)
    {
      const presetEnemy = enemies.preset[10] ?? {};
      const patchEnemy = enemies.patch[10] ?? {};
      const hex = romService.convertNumberToROMBytes(sdt, 2);
      presetEnemy.spawnDelayTime = sdt;
      patchEnemy[2] = hex[0];
      patchEnemy[3] = hex[1];
    }
  }

  createRandomizerTextPatch = () =>
  {
    const patch = Object.assign({}, patchMap.randomizerTextPatch.patch);
    patch.data = Object.assign({}, patchMap.randomizerTextPatch.patch.data);
    const sbs = this.getSeedTextBytes(patch);
    const lbs = this.getRandomProfileTextBytes();
    patch.data[patch.seedByteIndex.toString()] = sbs;
    patch.data[patch.levelByteIndex.toString()] = lbs;
    return patch;
  }

  getRandomizerHealthPatch = () =>
  {
    return health2Set.has(dataMap.randomProfile) ?
        patchMap.randomizerHealth2Patch.patch :
        patchMap.randomizerHealth1Patch.patch;
  }

  getRandomProfileTextBytes = () =>
  {
    const lt = randomizerLevelTexts[dataMap.randomProfile];
    return romService.convertStringToROMBytes(lt);
  }

  getSeedTextBytes = (patch) =>
  {
    let st = dataMap.seed.toString();
    const seedSize = patch.seedSize;
    st = "*".repeat(seedSize) + " " + st + " " + "*".repeat(seedSize);
    const remove = (st.length - seedSize) / 2;
    st = st.substring(remove, st.length - remove);
    st = st.length > seedSize ? st.substring(0, seedSize) : st;
    return romService.convertStringToROMBytes(st);
  }

  applyPreset = (preset) =>
  {
    const json = JSON.parse(preset);

    if(json && json.data && json.type === "randomizer")
    {
      dataMap = dataMap ? dataMap : {};
      Object.assign(dataMap, json.data);
      delete dataMap.customRandomProfile;
      let custom = json.data.customRandomProfile;
      custom = custom ? custom : {};
      Object.assign(randomizerData.randomProfile.custom, custom);
      const crp = randomizerData.randomProfile.custom;
      crp.key = "custom";
      crp.label = "Custom";
    }
  }
  
  createRandomizerPreset = () =>
  {
    const crp = randomizerData.randomProfile.custom;
    const preset = {};
    preset.type = "randomizer";
    preset.data = objectUtil.deepCopy(dataMap);

    if(dataMap.randomProfile === "custom")
    {
      preset.data.customRandomProfile = objectUtil.deepCopy(crp);
      delete preset.data.customRandomProfile.label;
    }

    return preset;
  }

  createLevelEditorPreset = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixDataMap();
    const randomizerData = this.randomizeAllEnemies();
    const preset = {};
    preset.type = "levelEditor";
    preset.data = randomizerData.preset;
    return preset;
  }

  createDefaultDataMap = () =>
  {
    const map = {};
    map.seed = this.getDateNowInMilliseconds();
    map.randomProfile = "wild";
    return map;
  }

  setDataMapToDefault = () =>
  {
    dataMap = this.createDefaultDataMap();
  }

  setCustomRandomProfileToDefault = () =>
  {
    const crp = randomizerData.randomProfile.custom;
    objectUtil.removeAllProperties(crp);
    crp.key = "custom";
    crp.label = "Custom";
  }

  // Fisher-Yates shuffle. 
  shuffle = (array, randomizer) =>
  {
    for(let i = array.length - 1; i > 0; i--)
    {
      const j = Math.floor(randomizer() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  sortAscending = (e1, e2) =>
  {
    return e1.triggerPosition - e2.triggerPosition;
  }

  mulberry32Randomizer = (seed) =>
  {
    return function()
    {
      seed += 0x6D2B79F5;
      var t = seed;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }

  addToModificationQueue = () =>
  {
    modificationService.add(150, "randomizer", this.applyRandomizer);
  }

  isValidLevelKey = (levelKey) =>
  {
    return (levelKey in randomizerData.enemyGroups);
  }

  isValidEnemyGroupKey = (levelKey, groupKey) =>
  {
    let level = randomizerData.enemyGroups[levelKey];
    level = level ? level : {}
    return (groupKey in level);
  }

  getUIRandomProfileList = () =>
  {
    const keys = Object.keys(randomizerData.randomProfile);
    return keys.map((key) => {return randomizerData.randomProfile[key];});
  }

  getUILevelList = () =>
  {
    const keys = Object.keys(randomizerData.levels);
    return keys.map((key) => {return randomizerData.levels[key];});
  }

  getUIEnemyGroupList = (levelKey) =>
  {
    const level = randomizerData.enemyGroups[levelKey];
    const keys = level ? Object.keys(level) : [];
    return keys.map((key) => {return level[key];});
  }

  getUIRandomizerEnemyStrategyList = (levelKey, groupKey) =>
  {
    const data = this.getCustomRandomProfileEnemyGroup(levelKey, groupKey);
    const keys = Object.keys(randomizerData.enemyStrategy);
    return keys.map((key) =>
    {
      const es = data[key];
      const c = objectUtil.deepCopy(randomizerData.enemyStrategy[key]);
      c.randomMinAmount = es?.randomMinAmount ? es.randomMinAmount : "";
      c.randomMaxAmount = es?.randomMaxAmount ? es.randomMaxAmount : "";
      return c;
    });
  }

  getUIEnemyGroup = (levelKey, groupKey) =>
  {
    const level = randomizerData.enemyGroups[levelKey];
    const group = level ? level[groupKey] : {};
    return group ? group : {};
  }

  constructor()
  {
    dataMap = this.createDefaultDataMap();
  }
}


let dataMap;

const health2Set = new Set(["mid", "hard", "wild", "restInPain"]);
const lockEndSet = new Set(["LA", "LB", "LC", "HA", "HB", "HC"]);
const extraAmountMap = {wild: 1, restInPain: 2}

const randomizerLevelTexts = 
{
  kind: "** Kind **",
  weak: "** Weak **",
  easy: "** Easy **",
  mid: "*** Mid **",
  hard: "** Hard **",
  wild: "** Wild **",
  restInPain: "*** RIP **",
  custom: "* Custom *"
}

const lockEndMap = {
  kind: "00",
  weak: "01",
  easy: "02",
  mid: "03",
  hard: "03",
  wild: "04",
  restInPain: "04",
  custom: "03"
}

const extraBossMap = {
  level1: ["dolg"],
  level2: ["shtromJr"],
  level3: ["yamato"],
  level4: ["monster"],
  level5: ["drTW"],
  level6: ["shtrom", "druk"],
  level7: ["blood"],
  level8: ["doppel"],
  level9: ["scumocide"]
}

export const randomizerService = new RandomizerService();
