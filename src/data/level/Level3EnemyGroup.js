export const level3EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level3A",
    groupReplaceIndex: 2027520,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 272,
    screenPositionEnd: 768,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 992,          // 0x320 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 7,
    maxAmount: 40
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level3A",
    groupReplaceIndex: 2028544,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 800,
    screenPositionEnd: 800,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 608,
    levelEditorLimitEnd: 992,          // 0x320 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 8,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy"
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level3A",
    groupReplaceIndex: 2029568,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 832,
    screenPositionEnd: 1224,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 608,
    levelEditorLimitEnd: 1424,          // 0x680 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level3A",
    groupReplaceIndex: 2029568,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 1240,
    screenPositionEnd: 1632,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 1040,
    levelEditorLimitEnd: 1856,          // 0x680 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level3A",
    groupReplaceIndex: 2031616,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1664,
    screenPositionEnd: 1664,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1472,
    levelEditorLimitEnd: 1856,          // 0x680 + 192
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 7,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy"
  },



  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level3B",
    groupReplaceIndex: 2032640,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2576,
    screenPositionEnd: 2832,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 2368,         // 0xA00 - 192
    levelEditorLimitEnd: 3040,           // 0xB20 + 192
    levelEditorShiftX: -2068,            // (300 + 192) - 0xA00
    levelEditorShiftY: 0,
    defaultAmount: 1,
    maxAmount: 40
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level3B",
    groupReplaceIndex: 2033664,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2848,
    screenPositionEnd: 2848,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 2656,
    levelEditorLimitEnd: 3040,          // 0xB20 + 192
    levelEditorShiftX: -2068,           // (300 + 192) - 0xA00
    levelEditorShiftY: 0,
    defaultAmount: 9,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy"
  },
  group5:
  {
    key: "group5",
    label: "Enemy Group 5",
    background: "level3B",
    groupReplaceIndex: 2034688,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2856,
    screenPositionEnd: 3300,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 2656,         // 0xB20 - 192
    levelEditorLimitEnd: 3500,
    levelEditorShiftX: -2068,            // (300 + 192) - 0xA00
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40
  },
  group6:
  {
    key: "group6",
    label: "Enemy Group 6",
    background: "level3B",
    groupReplaceIndex: 2034688,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 3316,
    screenPositionEnd: 3568,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 3116,
    levelEditorLimitEnd: 3776,           // 0xE00 + 192
    levelEditorShiftX: -2068,            // (300 + 192) - 0xA00
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40
  },
  lockGroup4:
  {
    key: "lockGroup4",
    label: "Lock Enemy Group 4",
    background: "level3B",
    groupReplaceIndex: 2036736,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3584,
    screenPositionEnd: 3584,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 3392,
    levelEditorLimitEnd: 3776,          // 0xE00 + 192
    levelEditorShiftX: -2068,           // (300 + 192) - 0xA00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy"
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level3C",
    groupReplaceIndex: 2037760,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4608,
    screenPositionEnd: 4736,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 96,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 4416,
    levelEditorLimitEnd: 4928,          // 0xE00 + 192
    levelEditorShiftX: -4116,           // (300 + 192) - 0x1200
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 28,
    specialStrategy: "bossInsideEnemyStrategy1",
    forbiddenEnemyKeys: ["dynamicBossArea"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level3C",
    groupReplaceIndex: 2038528,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4608,
    screenPositionEnd: 4736,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 96,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 4416,
    levelEditorLimitEnd: 4928,          // 0xE00 + 192
    levelEditorShiftX: -4116,           // (300 + 192) - 0x1200
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 28,
    specialStrategy: "bossInsideEnemyStrategy2",
    forbiddenEnemyKeys: ["dynamicBossArea"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level3C",
    groupReplaceIndex: 2039296,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4608,
    screenPositionEnd: 4736,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 96,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 4416,
    levelEditorLimitEnd: 4928,          // 0xE00 + 192
    levelEditorShiftX: -4116,           // (300 + 192) - 0x1200
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 18,
    specialStrategy: "bossInsideEnemyStrategy3",
    forbiddenEnemyKeys: ["dynamicBossArea"]
  }
}

// Level 3A:  0100 (256)
// Level 3B:  0A00 (2560)
// Level 3C:  0E00 (3584)