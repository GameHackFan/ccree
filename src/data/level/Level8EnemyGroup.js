export const level8EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level8A",
    groupReplaceIndex: 2076672,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 272,
    screenPositionEnd: 342,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 544,          // 0x160 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage8"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level8A",
    groupReplaceIndex: 2077696,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 352,
    screenPositionEnd: 352,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 160,
    levelEditorLimitEnd: 544,          // 0x160 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 14,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage8"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level8A",
    groupReplaceIndex: 2078720,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 370,
    screenPositionEnd: 1100,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 170,
    levelEditorLimitEnd: 1312,         // 0x460 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 7,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage8"]
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level8A",
    groupReplaceIndex: 2079744,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1120,
    screenPositionEnd: 1120,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 928,
    levelEditorLimitEnd: 1312,         // 0x460 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 16,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage8"]
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level8A",
    groupReplaceIndex: 2080768,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1140,
    screenPositionEnd: 1750,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 940,
    levelEditorLimitEnd: 1968,         // 0x6F0 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage8"]
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level8A",
    groupReplaceIndex: 2081792,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1776,
    screenPositionEnd: 1776,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1584,
    levelEditorLimitEnd: 1968,         // 0x6F0 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 13,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage8"]
  },
  lockGroup4:
  {
    key: "lockGroup4",
    label: "Lock Enemy Group 4",
    background: "level8A",
    groupReplaceIndex: 2082816,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1920,
    screenPositionEnd: 1920,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1728,
    levelEditorLimitEnd: 2112,         // 0x780 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 13,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage8", "rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },


  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level8B",
    groupReplaceIndex: 2083840,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2832,
    screenPositionEnd: 3100,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 38,
    levelEditorLimitStart: 2624,
    levelEditorLimitEnd: 3312,         // 0xC30 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 20,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage8"]
  },
  lockGroup5:
  {
    key: "lockGroup5",
    label: "Lock Enemy Group 5",
    background: "level8B",
    groupReplaceIndex: 2084864,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3120,
    screenPositionEnd: 3120,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 38,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 2928,
    levelEditorLimitEnd: 3312,         // 0xC30 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage8"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level8B",
    groupReplaceIndex: 2085888,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3072,
    screenPositionEnd: 3200,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 38,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2880,
    levelEditorLimitEnd: 3392,         // 0xC80 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenEnemyKeys: ["palleteStage8", "dynamicBossArea"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level8B",
    groupReplaceIndex: 2086912,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3072,
    screenPositionEnd: 3200,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 38,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2880,
    levelEditorLimitEnd: 3392,         // 0xC80 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage8", "dynamicBossArea"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level8B",
    groupReplaceIndex: 2087936,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3072,
    screenPositionEnd: 3200,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 38,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2880,
    levelEditorLimitEnd: 3392,         // 0xC80 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage8", "dynamicBossArea"]
  }
}

// Level 8A:  0100 (256)
// Level 8B:  0C00 (3072)