import { level1EnemyGroup } from "../level/Level1EnemyGroup";
import { level2EnemyGroup } from "../level/Level2EnemyGroup";
import { level3EnemyGroup } from "../level/Level3EnemyGroup";
import { level4EnemyGroup } from "../level/Level4EnemyGroup";
// import { level5EnemyGroup } from "../level/Level5EnemyGroup";
import { level6EnemyGroup } from "../level/Level6EnemyGroup";
import { level7EnemyGroup } from "../level/Level7EnemyGroup";
import { level8EnemyGroup } from "../level/Level8EnemyGroup";
import { level9EnemyGroup } from "../level/Level9EnemyGroup";

import { randomizerEnemyStrategy } from "./strategy/RandomizerEnemyStrategy";

import { customRandomProfile } from "./profile/CustomRandomProfile";
import { kindRandomProfile } from "./profile/KindRandomProfile";
import { weakRandomProfile } from "./profile/WeakRandomProfile";
import { easyRandomProfile } from "./profile/EasyRandomProfile";
import { midRandomProfile } from "./profile/MidRandomProfile";
import { hardRandomProfile } from "./profile/HardRandomProfile";
import { wildRandomProfile } from "./profile/WildRandomProfile";
import { restInPainRandomProfile } from "./profile/RestInPainRandomProfile";


export const randomizerData = 
{
  randomProfile:
  {
    kind: kindRandomProfile,
    weak: weakRandomProfile,
    easy: easyRandomProfile,
    mid: midRandomProfile,
    hard: hardRandomProfile,
    wild: wildRandomProfile,
    restInPain: restInPainRandomProfile,
    custom: customRandomProfile
  },
  enemyStrategy:
  {
    enemies:
    {
      key: "enemies",
      label: "Any Enemy",
      information: "Any enemy that is not a boss or subboss.",
      enemyKeys: randomizerEnemyStrategy.enemies,
    },
    enemiesInside:
    {
      key: "enemiesInside",
      label: "Any Enemy Inside the Screen",
      information: "Any enemy that is not a boss or subboss " + 
                   "falling from the sky or teleporting.",
      enemyKeys: randomizerEnemyStrategy.enemiesInside,
    },
    enemiesAndBosses:
    {
      key: "enemiesAndBosses",
      label: "Any Enemy or Boss",
      information: "Any enemy or boss with little health.",
      enemyKeys: randomizerEnemyStrategy.enemiesAndBosses,
    },
    softEnemies:
    {
      key: "softEnemies",
      label: "Any Soft Enemy",
      information: "Any Enemy that is not a boss or Mardia, Musashi or Z",
      enemyKeys: randomizerEnemyStrategy.softEnemies,
    },
    toughEnemies:
    {
      key: "toughEnemies",
      label: "Any Tough Enemy",
      information: "Mardia, Musashi or Z.",
      enemyKeys: randomizerEnemyStrategy.toughEnemies,
    },
    // weakBosses:
    // {
    //   key: "weakBosses",
    //   label: "Weak Boss",
    //   information: "Any boss as subboss, with little health.",
    //   enemyKeys: randomizerEnemyStrategy.weakBosses,
    // },
    // strongBosses:
    // {
    //   key: "strongBosses",
    //   label: "Strong Boss",
    //   information: "Any boss as subboss, with a lot of health.",
    //   enemyKeys: randomizerEnemyStrategy.strongBosses
    // },


    anyRobot:
    {
      key: "anyRobot",
      label: "Any Robot",
      information: "Combat Robot, Ice Robot, Fire Robot.",
      enemyKeys: randomizerEnemyStrategy.anyRobot,
    },



    anyUtilities:
    {
      key: "anyUtilities",
      label: "Any Utilities",
      information: "Any Weapon or Treasure or Nothing",
      enemyKeys: randomizerEnemyStrategy.anyUtilities,
    },
    anyWeapon:
    {
      key: "anyWeapon",
      label: "Any Weapon",
      information: "Any weapon",
      enemyKeys: randomizerEnemyStrategy.anyWeapon,
    },
    anyTreasure:
    {
      key: "anyTreasure",
      label: "Any Treasure",
      information: "Any treasure.",
      enemyKeys: randomizerEnemyStrategy.anyTreasure,
    },
    anyFood:
    {
      key: "anyFood",
      label: "Any Food",
      information: "Any food.",
      enemyKeys: randomizerEnemyStrategy.anyFood,
    },
    badFood:
    {
      key: "badFood",
      label: "Bad Food",
      information: "Bad food.",
      enemyKeys: randomizerEnemyStrategy.badFood,
    },
    averageFood:
    {
      key: "averageFood",
      label: "Average Food",
      information: "Average food.",
      enemyKeys: randomizerEnemyStrategy.averageFood,
    },
    goodFood:
    {
      key: "goodFood",
      label: "Good Food",
      information: "Good food.",
      enemyKeys: randomizerEnemyStrategy.goodFood,
    },



    anyFallingUtilities:
    {
      key: "anyFallingUtilities",
      label: "Any Utilities",
      information: "Any Falling Weapon or Treasure or Nothing",
      enemyKeys: randomizerEnemyStrategy.anyFallingUtilities,
    },
    anyFallingWeapon:
    {
      key: "anyFallingWeapon",
      label: "Any Falling Weapon",
      information: "Any Falling weapon",
      enemyKeys: randomizerEnemyStrategy.anyFallingWeapon,
    },
    anyFallingTreasure:
    {
      key: "anyFallingTreasure",
      label: "Any Falling Treasure",
      information: "Any Falling treasure.",
      enemyKeys: randomizerEnemyStrategy.anyFallingTreasure,
    },
    anyFallingFood:
    {
      key: "anyFallingFood",
      label: "Any Falling Food",
      information: "Any Falling Food.",
      enemyKeys: randomizerEnemyStrategy.anyFallingFood,
    },
    badFallingFood:
    {
      key: "badFallingFood",
      label: "Bad Falling Food",
      information: "Bad Falling Food.",
      enemyKeys: randomizerEnemyStrategy.badFallingFood,
    },
    averageFallingFood:
    {
      key: "averageFallingFood",
      label: "Average Falling Food",
      information: "Average Falling Food.",
      enemyKeys: randomizerEnemyStrategy.averageFallingFood,
    },
    goodFallingFood:
    {
      key: "goodFallingFood",
      label: "Good Falling Food",
      information: "Good Falling Food.",
      enemyKeys: randomizerEnemyStrategy.goodFallingFood,
    }
  },
  positionRange:
  {
    outsideLeft: [-24, -32],
    outsideRight: [408, 416],
    inside: [60, 320]
  },
  levels:
  {
    level1: {key: "level1", label: "Level 1", patchKey: "customStage1Patch"},
    level2: {key: "level2", label: "Level 2", patchKey: "customStage2Patch"},
    level3: {key: "level3", label: "Level 3", patchKey: "customStage3Patch"},
    level4: {key: "level4", label: "Level 4", patchKey: "customStage4Patch"},
    // level5: {key: "level5", label: "Level 5", patchKey: "customStage5Patch"},
    level6: {key: "level6", label: "Level 6", patchKey: "customStage6Patch"},
    level7: {key: "level7", label: "Level 7", patchKey: "customStage7Patch"},
    level8: {key: "level8", label: "Level 8", patchKey: "customStage8Patch"},
    level9: {key: "level9", label: "Level 9", patchKey: "customStage9Patch"},
  },
  enemyGroups:
  {
    level1: level1EnemyGroup,
    level2: level2EnemyGroup,
    level3: level3EnemyGroup,
    level4: level4EnemyGroup,
    // level5: level5EnemyGroup,
    level6: level6EnemyGroup,
    level7: level7EnemyGroup,
    level8: level8EnemyGroup,
    level9: level9EnemyGroup
  },
  enemyStrategyList:
  [
    "enemies", "enemiesInside", "enemiesAndBosses",
    "softEnemies", "toughEnemies", "weakBosses", "strongBosses",

    "anyRobot", "anyUtilities", "anyWeapon", "anyTreasure",
    "anyFood", "badFood", "averageFood", "goodFood",
  
    "anyFallingUtilities", "anyFallingWeapon", "anyFallingTreasure",
    "anyFallingFood", "badFallingFood", "averageFallingFood", "goodFallingFood"
  ],
  enemyBytePattern:
  [
    "SS", "SS",       // Static data, spawn code offset.

    "RR", "RR",       // Trigger spawn or time delay.

    "RR", "RR",       // Position X.

    "SS", "SS",       // Static data, elevation.

    "RR", "RR",       // Position Y.

    "SS", "SS",       // Static data, half of the object pointer.

    "SS", "SS",       // Static data, half of the object pointer.

    "SS", "SS",       // Static data, half of the object posture / sub category.

    "SS", "SS",       // Static data, half of the object posture / sub category.

    "SS", "SS",       // Static data, object specific data.

    "SS", "SS",       // Static data, object init timer.

    "SS", "SS"        // Someties Static data, object rage / direction.
  ]
}