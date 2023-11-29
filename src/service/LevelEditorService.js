
import { objectUtil } from '../data/default/ObjectUtil';
import { imageMap } from "../data/default/ImageMap";
import { patchMap } from "../data/patch/PatchMap";
import { enemyByteMap } from "../data/byte/EnemyByteMap";
import { levelDefaultData } from "../data/level/LevelDefaultData";
import { levelEditorLevels } from "../data/level/LevelEditorLevels";
import { levelEditorEnemies } from "../data/level/LevelEditorEnemies";
import { levelEditorLevelAreas } from "../data/level/LevelEditorLevelAreas";
import { modificationService } from './ModificationService';
import { patchService } from './PatchService';
import { romService } from "./ROMService";
import mergeImages from '../api/merge-images.js';


class LevelEditorService
{
  createLevelEditorPatch = () =>
  {
    const patch = {};
    patch.data = {};
    this.applyDataToPatch(patch);
    patch.type = "overwrite";
    patch.byteFormat = "hex";
    patch.filename = "cce_re.10f";
    return patch;
  }

  applyDataToPatch = (patch) =>
  {
    const editData = objectUtil.deepCopy(dataMap);

    Object.keys(dataMap).forEach((lk) =>
    {
      const level = dataMap[lk];

      Object.keys(level).forEach((egk) =>
      {
        const enemyGroup = level[egk];
        const leeg = this.getLevelEditorEnemyGroup(lk, egk);

        if(!leeg || leeg.disabled)
          return;

        this.removeExtraEnemies(enemyGroup, leeg);
        this.forceEnemy(enemyGroup, leeg, Object.keys(enemyGroup).length);
        const enemies = this.getEnemiesBytesFromGroup(enemyGroup, leeg);
        this.updateEditorPatchData(lk, leeg, patch);
        this.addEnemiesBytesToPatch(leeg, patch, enemies);
      });
    });

    // NOTE: Let the user decide about this?
    dataMap = editData;
  }

  applyData = () =>
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
    romService.applyPatch(patchMap.foodHealImprovementPatch.patch);
    romService.applyPatch(patchMap.itemDropImprovementPatch.patch);
    romService.applyPatch(patchMap.deactivateDefaultBossHelperGroupPatch.patch);
    romService.applyPatch(patchMap.levelEditorTextPatch.patch);
    romService.applyPatch(this.createLevelEditorPatch());
  }

  addEnemy = (levelKey, enemyGroupKey) =>
  {
    const eg = dataMap[levelKey][enemyGroupKey];
    const leeg = this.getLevelEditorEnemyGroup(levelKey, enemyGroupKey);
    const e = this.createWooky(leeg.screenPositionStart);
    const id = Object.keys(eg).length.toString();
    e.id = id;
    e.positionY = leeg.walkablePositionYTop;

    if(leeg.minimumPositionX)
      e.positionX = leeg.minimumPositionX;
    
    eg[id] = e;
    return e;
  }

  getEnemiesBytesFromGroup = (enemyGroup, levelEditorEnemyGroup) =>
  {
    let enemies = [];

    Object.keys(enemyGroup).forEach((ek) =>
    {
      const enemy = enemyGroup[ek];
      this.fixEnemyData(enemy, levelEditorEnemyGroup);
      const enemyBytes = enemyByteMap[enemy.enemyKey].slice();
      
      let sd = levelEditorEnemyGroup.mustHaveSpawnDelayTime ?
          enemy.spawnDelayTime : enemy.triggerPosition;
      let hex = romService.convertNumberToROMBytes(sd, 2);
      enemyBytes[2] = hex[0];
      enemyBytes[3] = hex[1];
      
      hex = romService.convertNumberToROMBytes(enemy.positionX, 2);
      enemyBytes[4] = hex[0];
      enemyBytes[5] = hex[1];

      hex = romService.convertNumberToROMBytes(enemy.positionY, 2);
      enemyBytes[8] = hex[0];
      enemyBytes[9] = hex[1];

      // Some postures or objects might have dynamic look direction
      if(enemyBytes[23] === "RR")
      {
        let mr = enemy.positionX < (enemy.triggerPosition + 192);

        if(enemy.enemyKey.includes("fallingDrumcan"))
        {
          enemyBytes[22] = mr ? "02" : "FD";
          enemyBytes[23] = mr ? "00" : "FF";
        }
        else
          enemyBytes[23] = mr ? "20" : "00";
      }

      // This fixes the spawn code to be called
      if(levelEditorEnemyGroup.mustHaveSpawnDelayTime)
        enemyBytes[0] = (parseInt(enemyBytes[0], 16) + 0x40).toString(16);

      enemies = enemies.concat(enemyBytes);
    });

    return enemies;
  }

  setEnemyKey = (levelKey, enemyGroupKey, enemyId, enemyKey) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.enemyKey = enemyKey;
  }

  setEnemyTriggerPosition = (levelKey,
      enemyGroupKey, enemyId, triggerPosition) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.triggerPosition = triggerPosition;
  }

  setEnemySpawnDelayTime = (levelKey,
      enemyGroupKey, enemyId, spawnDelayTime) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.spawnDelayTime = spawnDelayTime;
  }

  setEnemyPositionX = (levelKey, enemyGroupKey, enemyId, positionX) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.positionX = positionX;
  }

  setEnemyPositionY = (levelKey, enemyGroupKey, enemyId, positionY) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.positionY = positionY;
  }

  // NOTE: This is not being used because the editor handles it already
  setEnemyElevation = (levelKey, enemyGroupKey, enemyId, elevation) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.elevation = elevation;
  }

  // NOTE: This is not being used since it increases the damage dealt drastically.
  setEnemyRage = (levelKey, enemyGroupKey, enemyId, rage) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.rage = rage;
  }

  toggleEnemyNoLevelLimits = (levelKey, enemyGroupKey, enemyId) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.noLevelLimits = enemy.noLevelLimits ? false : true;
  }

  getEnemy = (levelKey, enemyGroupKey, enemyId) =>
  {
    const l = this.getField(dataMap, levelKey);
    const eg = this.getField(l, enemyGroupKey);
    return this.getField(eg, enemyId);
  }

  getEnemies = (levelKey, enemyGroupKey) =>
  {
    const l = this.getField(dataMap, levelKey);
    return this.getField(l, enemyGroupKey);
  }

  removeEnemy = (levelKey, enemyGroupKey, enemyId) =>
  {
    let eg = dataMap[levelKey][enemyGroupKey];

    if(eg && enemyId && eg[enemyId])
    {
      delete eg[enemyId];
      const ids = Object.keys(eg);
      const e = ids.map((key) => {return eg[key];});
      dataMap[levelKey][enemyGroupKey] = {}
      eg = dataMap[levelKey][enemyGroupKey];
      e.forEach((enemy, id) =>
      {
        enemy.id = id;
        eg[id.toString()] = enemy;
      });
    }
  }

  removeExtraEnemies = (enemyGroup, levelEditorEnemyGroup) =>
  {
    let enemyMap = Object.keys(enemyGroup);
    const maxAmount = levelEditorEnemyGroup.maxAmount;

    while(enemyMap.length > maxAmount)
    {
      const key = enemyMap.pop();
      delete enemyGroup[key];
      enemyMap = Object.keys(enemyGroup);
    }
  }

  fixEnemyData = (enemy, levelEditorEnemyGroup) =>
  {
    const leeg = levelEditorEnemyGroup;
    const e = enemy;
    e.spawnDelayTime = this.getValidValue(e.spawnDelayTime, 1, 32766);
    e.triggerPosition = this.getValidValue(e.triggerPosition,
        leeg.screenPositionStart, leeg.screenPositionEnd);

    const nll = enemy.noLevelLimits === true ? true : false;
    let min = nll ? 0 : leeg.walkablePositionYBottom;
    let max = nll ? 65355 : leeg.walkablePositionYTop;
    const py = this.getValidValue(e.positionY, min, max);
    const shift = this.tryGetField(leeg, "walkablePositionForceShift", 0);
    e.positionY = py + shift;

    let px = enemy.positionX;
    px = Math.max(px, enemy.triggerPosition - 32);
    px = Math.min(px, enemy.triggerPosition + 416);
    enemy.positionX = px;
  }

  addEnemiesBytesToPatch = (levelEditorEnemyGroup, editorPatch, enemiesBytes) =>
  {
    const index = levelEditorEnemyGroup.groupReplaceIndex.toString();
    const symbol = levelEditorEnemyGroup.groupReplaceByteSymbol;
    const bytes = editorPatch.data[index];
    const symbolIndex = bytes?.indexOf(symbol) ?? -1;

    if(bytes && symbolIndex > -1)
    {
      let newBytes = bytes.slice(0, symbolIndex - 23).concat(enemiesBytes);
      newBytes = newBytes.concat(bytes.slice(symbolIndex + 1, bytes.length));
      editorPatch.data[index] = newBytes;
    }
  }

  updateEditorPatchData = (levelKey, levelEditorEnemyGroup, editorPatch) =>
  {
    const index = levelEditorEnemyGroup.groupReplaceIndex.toString();
    const bytes = editorPatch.data[index];

    if(!bytes)
    {
      const key = levelEditorLevels[levelKey]?.patchKey;
      const patchData = patchService.get(key);
      editorPatch.data[index] = patchData.patch.data[index];
    }
  }

  forceEnemy = (enemyGroup, levelEditorEnemyGroup, enemyAmount) =>
  {
    if(enemyAmount < 1)
    {
      const tp = levelEditorEnemyGroup.screenPositionStart;
      const enemy = this.createEnemy("coin", tp);
      enemy.positionX -= 32;
      enemy.id = 0;
      enemyGroup[0] = enemy;
    }
  }

  createLevelImage = (levelKey, enemyGroupKey, enemyId, callback) =>
  {
    const level = this.getField(dataMap, levelKey);
    const eg = this.getField(level, enemyGroupKey);
    const lel = this.getField(levelEditorLevels, levelKey);
    const leeg = this.getField(lel.groups, enemyGroupKey);

    if(!this.isAnythingEmpty([level, lel, leeg]))
    {
      const enemy = this.getField(eg, enemyId);
      let mergeData = [];
      mergeData = mergeData.concat(this.getLevelMergeData(leeg));
      mergeData = mergeData.concat(
          this.getNonSelectedEnemiesMergeData(enemyId, eg, leeg));
      mergeData = mergeData.concat(this.getSelectedEnemyMergeData(enemy, leeg));
      mergeData = mergeData.concat(this.getCameraFOVMergeData(enemy, leeg));
      mergeData = mergeData.concat(this.getGroupLimitsMergeData(leeg));
      mergeImages(mergeData).then((base64) =>
      {
        if(callback)
          callback(base64);
      });
    }
    else
      callback(null);
  }

  getNonSelectedEnemiesMergeData = (enemyId, enemyGroup, levelEditorEnemyGroup) =>
  {
    const ids = Object.keys(enemyGroup);
    const leeg = levelEditorEnemyGroup;
    const mergeData = [];
    ids.sort((a, b) =>
    {
      const va = this.getValidValue(
          enemyGroup[a].positionY,
          leeg.walkablePositionYBottom,
          leeg.walkablePositionYTop);
      const vb = this.getValidValue(
          enemyGroup[b].positionY,
          leeg.walkablePositionYBottom,
          leeg.walkablePositionYTop);
      return vb - va;
    });
    ids.forEach((id) =>
    {
      if(id !== enemyId)
      {
        const nsEnemy = enemyGroup[id];
        const enemyData = this.getEnemyMergeObject(nsEnemy, leeg);
        enemyData.opacity = 0.7;
        mergeData.push(enemyData);
      }
    });
    return mergeData;
  }

  getGroupLimitsMergeData = (levelEditorEnemyGroup) =>
  {
    const mergeData = [];
    const leeg = levelEditorEnemyGroup;
    const lee = levelEditorEnemies;
    const glImg = imageMap["groupLimit"];
    const glHW = lee["groupLimit"].width / 2;
    let px1, px2, py, shift;

    if(isNaN(leeg.levelEditorFOVPositionX))
    {
      shift = this.tryGetField(leeg, "levelEditorShiftX", 0) - glHW;
      px1 = leeg.levelEditorLimitStart + shift;
      px2 = leeg.levelEditorLimitEnd + shift;
    }
    else
    {
      px1 = leeg.levelEditorFOVPositionX - glHW;
      px2 = leeg.levelEditorFOVPositionX - glHW + lee["cameraFOV"].width;
    }

    if(isNaN(leeg.levelEditorFOVPositionY))
      py = this.tryGetField(leeg, "levelEditorShiftY", 0);
    else
      py = leeg.levelEditorFOVPositionY;

    mergeData.push({src: glImg, opacity: 0.7, y: py, x: px1});
    mergeData.push({src: glImg, opacity: 0.7, y: py, x: px2});
    return mergeData;
  }

  getEnemyMergeObject = (enemy, levelEditorEnemyGroup) =>
  {
    const lee = levelEditorEnemies;
    const leEnemy = lee[enemy.enemyKey];

    if(enemy && leEnemy)
    {
      const leeg = levelEditorEnemyGroup;
      const enemyImg = imageMap[enemy.enemyKey];
      const lh = levelEditorLevelAreas[leeg.background].height;
      let shift = this.tryGetField(leeg, "levelEditorShiftX", 0);
      shift -= lee["cameraFOV"].width / 2;
      let px = parseInt(enemy.positionX);
      px = px ? px : 0;
      px = (px + shift) - leEnemy.pivotX;
      let py = this.getValidValue(enemy.positionY,
          leeg.walkablePositionYBottom, 65535);

      py = lh - (py + leEnemy.pivotY);
      return {src: enemyImg, x: px, y: py};
    }

    return {};
  }

  getCameraFOVMergeData = (enemy, levelEditorEnemyGroup) =>
  {
    const lee = levelEditorEnemies;
    const leEnemy = lee[enemy.enemyKey];

    if(enemy && leEnemy)
    {
      const leeg = levelEditorEnemyGroup;
      let px, py, shift;

      if(isNaN(leeg.levelEditorFOVPositionX))
      {
        shift = this.tryGetField(leeg, "levelEditorShiftX", 0);
        shift -= lee["cameraFOV"].width / 2;
        px = parseInt(enemy.triggerPosition);
        px = px ? px + shift : shift;
      }
      else
        px = leeg.levelEditorFOVPositionX;

      if(isNaN(leeg.levelEditorFOVPositionY))
        py = this.tryGetField(leeg, "levelEditorShiftY", 0);
      else
        py = leeg.levelEditorFOVPositionY;

      return [{src: imageMap["cameraFOV"], opacity: 0.7, x: px, y: py}];
    }

    return [];
  }

  getSelectedEnemyMergeData = (enemy, levelEditorEnemyGroup) =>
  {
    const emo = this.getEnemyMergeObject(enemy, levelEditorEnemyGroup);
    
    if(!this.isAnythingEmpty([emo]))
      return [emo];

    return [];
  }

  getLevelMergeData = (levelEditorEnemyGroup) =>
  {
    const image = imageMap[levelEditorEnemyGroup.background];

    if(image)
      return [{src: image, x: 0, y: 0}];
    
    return [];
  }

  tryGetField = (object, field, def) =>
  {
    const value = object ? object[field] : null;
    return value ? value : def;
  }

  applyPreset = (preset) =>
  {
    const json = JSON.parse(preset);

    if(json && json.data && json.type === "levelEditor")
      dataMap = json.data;
  }

  createPreset = () =>
  {
    const preset = {};
    preset.type = "levelEditor";
    preset.data = objectUtil.deepCopy(dataMap);
    delete preset.data.filename;
    return preset;
  }

  getValidValue = (value, min, max) =>
  {
    let nv = parseInt(value);
    nv = isNaN(nv) ? 0: nv;
    nv = Math.max(nv, min);
    nv = Math.min(nv, max);
    return nv;
  }

  createWooky = (triggerPosition) =>
  {
    return this.createEnemy("wooky", triggerPosition);
  }

  createEnemy = (enemyKey, triggerPosition) =>
  {
    const e = {};
    e.id = null;
    e.enemyKey = enemyKey in levelEditorEnemies ? enemyKey : "coin";
    e.triggerPosition = triggerPosition;
    e.positionX = triggerPosition;
    e.positionY = 30;
    e.spawnDelayTime = 0;
    e.noLevelLimits = false;
    return e;
  }

  getLevelEditorEnemyGroup = (levelKey, enemyGroupKey) =>
  {
    const lel = levelEditorLevels[levelKey];
    
    if(lel)
    {
      const leeg = lel.groups[enemyGroupKey];
      return leeg ? leeg : null;
    }
    
    return null;
  }

  getField = (object, field) =>
  {
    const fixedObject = object ? object : {};
    const content = field ? fixedObject[field] : {};
    return content ? content : {};
  }

  isAnythingEmpty = (args) =>
  {    
    for(let i = 0; i < args.length; i++)
    {
      if(Object.keys(args[i]).length < 1)
        return true;
    }
    
    return false;
  }

  addToModificationQueue = () =>
  {
    modificationService.add(150, "level", this.applyData);
  }

  isValidLevelKey = (levelKey) =>
  {
    return (levelKey in levelEditorLevels);
  }

  isValidEnemyGroupKey = (levelKey, groupKey) =>
  {
    let level = levelEditorLevels[levelKey]?.groups;
    level = level ? level : {}
    return (groupKey in level);
  }

  isValidEnemyKey = (enemyKey) =>
  {
    return (enemyKey in levelEditorEnemies);
  }

  setDataMapToDefault = () =>
  {
    dataMap = objectUtil.deepCopy(levelDefaultData);
  }

  getUILevelList = () =>
  {
    const keys = Object.keys(levelEditorLevels);
    return keys.map((key) => {return levelEditorLevels[key];});
  }

  getUIEnemyGroupList = (levelKey) =>
  {
    const level = levelEditorLevels[levelKey]?.groups;
    const keys = level ? Object.keys(level) : [];
    const groups = [];
    keys.forEach((key) =>
    {
      const group = level[key];
      const disabled = group?.disabled ? group.disabled : false;

      if(group && !disabled)
        groups.push(group);
    });
    return groups;
  }

  getUIEnemyGroup = (levelKey, groupKey) =>
  {
    const level = levelEditorLevels[levelKey]?.groups;
    const group = level ? level[groupKey] : null;
    return group ? group : {};
  }

  getUIAreaScroll = (levelKey, groupKey) =>
  {
    const level = levelEditorLevels[levelKey]?.groups;
    const group = level ? level[groupKey] : null;
    const scroll = group ? group.verticalScroll : false;
    return scroll ? scroll : false;
  }

  getUIEnemyFilteredList = (filter, level, enemyGroup, enemyId) =>
  {
    const enemieKeys = Object.keys(levelEditorEnemies);

    // Removes the none, cameraFOV, groupLimit.
    for(let i = 0; i < 3; i++)
      enemieKeys.pop();
    
    if(filter)
    {
      const filterLower = filter.toLowerCase();
      const selected = levelEditorService.getEnemy(level, enemyGroup, enemyId);
      const filtered = [];
      enemieKeys.forEach((ek) =>
      {
        const v = levelEditorEnemies[ek].label.toLowerCase().includes(filterLower);

        if(v || ek === selected.enemyKey)
          filtered.push(levelEditorEnemies[ek]);
      });

      return filtered;
    }

    return enemieKeys.map((key) => levelEditorEnemies[key]);
  }

  getUIEnemyAddedList = (levelKey, groupKey) =>
  {
    const level = this.getField(dataMap, levelKey);
    const group = this.getField(level, groupKey);
    return Object.keys(group).map((key) =>
    {
      const enemy = group[key];
      const label = levelEditorEnemies[enemy.enemyKey]?.label;
      return {...enemy, label, id: key};
    });
  }

  getUIEnemyPositionXRange = (enemyGroup, enemy) =>
  {
    let base = enemyGroup.positionXForceShift;
    let mvsd = enemyGroup.mustHaveSpawnDelayTime;
    let min = base ? base : null;
    let max = base ? base : null;
    
    if(min === null)
      min = parseInt(mvsd ? enemyGroup.screenPositionStart : enemy.triggerPosition);

    if(max === null)
      max = parseInt(mvsd ? enemyGroup.screenPositionEnd : enemy.triggerPosition);

    min = isNaN(min) ? 0 : min;
    max = isNaN(max) ? 0 : max;
    const range = {};
    range.min = min ? (min - 32) : 0;
    range.max = max ? (max + 416) : 0;
    return range;
  }

  constructor()
  {
    dataMap = objectUtil.deepCopy(levelDefaultData);
  }
}


let dataMap;

export const levelEditorService = new LevelEditorService();