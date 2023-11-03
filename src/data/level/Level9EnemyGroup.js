export const level9EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level9A",
    groupReplaceIndex: 2088960,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 272,
    screenPositionEnd: 390,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 592,          // 0x190 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 8,
    maxAmount: 40,
    forbiddenEnemyKeys: ["robot"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level9A",
    groupReplaceIndex: 2089984,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 400,
    screenPositionEnd: 400,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 208,
    levelEditorLimitEnd: 592,          // 0x190 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["robot"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level9A",
    groupReplaceIndex: 2091008,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 420,
    screenPositionEnd: 850,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 220,
    levelEditorLimitEnd: 1088,
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 8,
    maxAmount: 27,
    forbiddenEnemyKeys: ["robot"]
  },



  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level9B",
    groupReplaceIndex: 2091008,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 912,
    screenPositionEnd: 1220,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 704,
    levelEditorLimitEnd: 1420,
    levelEditorShiftX: -404,           // (300 + 192) - 0x380
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 27
  },
  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level9B",
    groupReplaceIndex: 2091008,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 1230,
    screenPositionEnd: 1750,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 1030,
    levelEditorLimitEnd: 1968,         // 0x6F0 + 192
    levelEditorShiftX: -404,           // (300 + 192) - 0x380
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 27
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level9B",
    groupReplaceIndex: 2093056,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1776,
    screenPositionEnd: 1776,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1584,
    levelEditorLimitEnd: 1968,         // 0x6F0 + 192
    levelEditorShiftX: -404,           // (300 + 192) - 0x380
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy"
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level9B",
    groupReplaceIndex: 2094080,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1856,
    screenPositionEnd: 1856,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1664,
    levelEditorLimitEnd: 2048,         // 0x740 + 192
    levelEditorShiftX: -404,           // (300 + 192) - 0x380
    levelEditorShiftY: 0,
    defaultAmount: 13,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level9C",
    groupReplaceIndex: 2095104,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2980,         // Default 2856
    screenPositionEnd: 3030,           // Default 3176
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2664,
    levelEditorLimitEnd: 3368,         // 0xC68 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 28,
    specialStrategy: "bossInsideEnemyStrategy1",
    forbiddenEnemyKeys: ["palleteFinalBossArea", "dynamicBossArea"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level9C",
    groupReplaceIndex: 2095872,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2980,         // Default 2856
    screenPositionEnd: 3030,           // Default 3176
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2664,
    levelEditorLimitEnd: 3368,         // 0xC68 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 28,
    specialStrategy: "bossInsideEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteFinalBossArea", "dynamicBossArea"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level9C",
    groupReplaceIndex: 2096640,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2980,         // Default 2856
    screenPositionEnd: 3030,           // Default 3176
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2664,
    levelEditorLimitEnd: 3368,         // 0xC68 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 18,
    specialStrategy: "bossInsideEnemyStrategy3",
    forbiddenEnemyKeys: ["palleteFinalBossArea", "dynamicBossArea"]
  }
}

// Level 9A:  0100 (256)
// Level 9B:  0380 (896)
// Level 9C:  0B28 (2856)