import { objectUtil } from '../data/default/ObjectUtil';
import { randomizerData } from  "../data/randomizer/RandomizerData";
import { forbiddenEnemyData } from '../data/randomizer/ForbiddenEnemyData';


class ForbiddenService
{
  getValidEnemyIndexList = (enemyKeyList, forbiddenEnemyKeyList) =>
  {
    const fekSet = new Set();
    const fekl = forbiddenEnemyKeyList ?? [];
    fekl.forEach((k) => forbiddenEnemyData[k]?.forEach((ek) => fekSet.add(ek)));
    let veil = [];

    enemyKeyList.forEach((ek, index) =>
    {
      if(!fekSet.has(ek))
        veil.push(index);
    });

    // NOTE: This ensures the list has at least one key
    if(veil.length < 1)
      veil.push("woodenBoxWithWooky");

    return veil;
  }

  getValidPositionRangeList = (enemyKey, enemyGroup, forbiddenRangeList) =>
  {
    let rangeList = objectUtil.deepCopy(randomizerData.positionRange);
    let frl = forbiddenRangeList ? forbiddenRangeList : [];
    frl.forEach((fk) => {delete rangeList[fk];});

    if(enemyKey.includes("fallingDrumcan"))
    {
      if(!this.isSingleScreenGroup(enemyGroup))
        delete rangeList.outsideLeft;
    }
    else if(this.cantSpawnOutsideLeft(enemyKey, enemyGroup))
    {
      delete rangeList.inside;
      delete rangeList.outsideLeft;
    }
    if(cantSpawnRightSet.has(enemyKey))
    {
      delete rangeList.outsideRight;
      delete rangeList.inside;
    }
    else if(robotSet.has(enemyKey))
    {
      delete rangeList.inside;

      if(!this.isSingleScreenGroup(enemyGroup))
        delete rangeList.outsideLeft;
    }
    else if(this.cantSpawnOutside(enemyKey))
    {
      delete rangeList.outsideLeft;
      delete rangeList.outsideRight;
    }
    else if(this.isBarrel(enemyKey))
    {
      delete rangeList.inside;
      delete rangeList.outsideLeft;
    }
    else
      delete rangeList.inside;

    if(Object.keys(rangeList).length < 1)
      rangeList.inside = randomizerData.positionRange.inside;

    return rangeList;
  }

  isBarrel = (objectKey) =>
  {
    for(let i = 0; i < staticBarrelList.length; i++)
    {
      if(objectKey.includes(staticBarrelList[i]))
        return true;
    }

    return false;
  }

  cantSpawnOutsideLeft = (enemyKey, enemyGroup) =>
  {
    const csl = cantSpawnLeftSet.has(enemyKey);
    const nssg = !this.isSingleScreenGroup(enemyGroup);
    return csl || (nssg && cantSpawnLeftOutOfLockSet.has(enemyKey));
  }

  cantSpawnOutside = (enemyKey) =>
  {
    return enemyKey.includes("Falling") || enemyKey.includes("Teleporting");
  }

  isSingleScreenGroup = (enemyGroup) =>
  {
    return enemyGroup?.singleScreenGroup ?? false;
  }
}


const robotSet = new Set(["combatRobot", "iceRobot", "fireRobot"]);

const cantSpawnLeftOutOfLockSet = new Set([
  "wooky", "eddy",

  "dickPistol", "dickM16", "dickRocket",

  "kojiroTeleporting1",

  "hanzo", "hanzoTeleporting1",

  "sasuke", "sasukeTeleporting1",

  "carolWalking", "carolShocking",

  "brendaWalking",

  "musashi"
]);

const cantSpawnLeftSet = new Set([
  "wookyWalkingLeft", "wookyWalkingInLeft",

  "eddyWalkingLeft", "eddyWalkingInLeft",

  "dickPistolWalkingLeft", "dickPistolWalkingInLeft",
  "dickPistolWalkingLeftItemDrop", "dickPistolWalkingInLeftItemDrop",
  "dickPistolWalkingLeftShoot", "dickPistolWalkingInLeftShoot",

  "dickM16WalkingLeft", "dickM16WalkingInLeft",
  "dickM16WalkingLeftItemDrop", "dickM16WalkingInLeftItemDrop",
  "dickM16WalkingLeftShoot", "dickM16WalkingInLeftShoot",

  "dickRocketWalkingLeft", "dickRocketWalkingInLeft",
  "dickRocketWalkingLeftItemDrop", "dickRocketWalkingInLeftItemDrop",
  "dickRocketWalkingLeftShoot", "dickRocketWalkingInLeftShoot",

  "samsonWalkingLeft", "organoWalkingLeft",

  "skipWalkingLeft", "skipThrowingKnifeLeft",
  "sonieWalkingLeft", "sonieThrowingKnifeLeft",

  "marbinBlowingFireLeft", "marbinBlowingFireLeftItemDrop"
]);

const cantSpawnRightSet = new Set([
  "wookyWalkingRight", "wookyWalkingInRight",

  "eddyWalkingRight", "eddyWalkingInRight",

  "dickPistolWalkingRight", "dickPistolWalkingInRight",
  "dickPistolWalkingRightItemDrop", "dickPistolWalkingInRightItemDrop",
  "dickPistolWalkingRightShoot", "dickPistolWalkingInRightShoot",

  "dickM16WalkingRight", "dickM16WalkingInRight",
  "dickM16WalkingRightItemDrop", "dickM16WalkingInRightItemDrop",
  "dickM16WalkingRightShoot", "dickM16WalkingInRightShoot",

  "dickRocketWalkingRight", "dickRocketWalkingInRight",
  "dickRocketWalkingRightItemDrop", "dickRocketWalkingInRightItemDrop",
  "dickRocketWalkingRightShoot", "dickRocketWalkingInRightShoot",

  "samsonWalkingRight", "organoWalkingRight",

  "skipWalkingRight", "skipThrowingKnifeRight",
  "sonieWalkingRight", "sonieThrowingKnifeRight",

  "marbinBlowingFireRight", "marbinBlowingFireRightItemDrop"
]);

const staticBarrelList = [
  "block", "depositBox", "drumcan", "largeDepositBox",
  "largeWoodenBox", "woodenBox"
];


export const forbiddenService = new ForbiddenService();