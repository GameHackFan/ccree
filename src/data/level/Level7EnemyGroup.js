export const level7EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level7A",
    verticalScroll: true,
    groupReplaceIndex: 2064384,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 272,
    screenPositionEnd: 620,
    walkablePositionYTop: 405,
    walkablePositionYBottom: 310,
    walkablePositionForceShift: 1280,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 770,
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 15,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level7A",
    verticalScroll: true,
    groupReplaceIndex: 2064384,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 630,
    screenPositionEnd: 950,
    walkablePositionYTop: 405,
    walkablePositionYBottom: 310,
    walkablePositionForceShift: 1280,
    levelEditorLimitStart: 430,
    levelEditorLimitEnd: 1150,         // 0x4F0 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 10,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level7A",
    verticalScroll: true,
    groupReplaceIndex: 2066432,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1264,
    screenPositionEnd: 1264,
    walkablePositionYTop: 405,
    walkablePositionYBottom: 310,      // 250 for whole area
    walkablePositionForceShift: 1280,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1072,
    levelEditorLimitEnd: 1456,         // 0x4F0 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 16,
    defaultAmount: 21,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage7", "rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level7A",
    verticalScroll: true,
    groupReplaceIndex: 2067456,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1456,
    screenPositionEnd: 1456,
    walkablePositionYTop: 336,
    walkablePositionYBottom: 154,
    walkablePositionForceShift: 1280,
    singleScreenGroup: true,
    levelEditorLimitStart: 1264,
    levelEditorLimitEnd: 1648,         // 0x5B0 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 112,
    defaultAmount: 7,
    maxAmount: 40,
    specialStrategy: "insideEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level7A",
    verticalScroll: true,
    groupReplaceIndex: 2068480,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1600,
    screenPositionEnd: 1600,
    walkablePositionYTop: 264,
    walkablePositionYBottom: 82,
    walkablePositionForceShift: 1280,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1408,
    levelEditorLimitEnd: 1792,         // 0x640 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 184,
    defaultAmount: 12,
    maxAmount: 40,
    specialStrategy: "insideLockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level7A",
    verticalScroll: true,
    groupReplaceIndex: 2069504,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1920,
    screenPositionEnd: 1920,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 1280,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1728,
    levelEditorLimitEnd: 2112,         // 0x780 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 256,
    defaultAmount: 11,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage7", "rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },



  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level7B",
    groupReplaceIndex: 2070528,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2832,
    screenPositionEnd: 3210,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 1280,
    levelEditorLimitStart: 2624,       // 0xB00 - 192
    levelEditorLimitEnd: 3410,
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 11,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  group5:
  {
    key: "group5",
    label: "Enemy Group 5",
    background: "level7B",
    groupReplaceIndex: 2070528,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 3220,
    screenPositionEnd: 3600,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 1280,
    levelEditorLimitStart: 3010,
    levelEditorLimitEnd: 3808,         // 0xE20 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  lockGroup4:
  {
    key: "lockGroup4",
    label: "Lock Enemy Group 4",
    background: "level7B",
    groupReplaceIndex: 2072576,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3616,
    screenPositionEnd: 3616,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 1280,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 3424,
    levelEditorLimitEnd: 3808,         // 0xE20 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 11,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  lockGroup5:
  {
    key: "lockGroup5",
    label: "Lock Enemy Group 5",
    background: "level7B",
    groupReplaceIndex: 2073600,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3968,
    screenPositionEnd: 3968,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 1280,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 3776,
    levelEditorLimitEnd: 4160,         // 0xF80 + 192
    levelEditorShiftX: -2324,          // (300 + 192) - 0xB00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage7", "rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level7C",
    groupReplaceIndex: 2074624,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4608,
    screenPositionEnd: 4608,
    walkablePositionYTop: 122,
    walkablePositionYBottom: 43,
    walkablePositionForceShift: 27,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 4416,
    levelEditorLimitEnd: 4800,           // 0x1200 + 192
    levelEditorShiftX: -3860,            // (300 + 192) - 0x1100
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 28,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level7C",
    groupReplaceIndex: 2075392,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4608,
    screenPositionEnd: 4608,
    walkablePositionYTop: 122,
    walkablePositionYBottom: 43,
    walkablePositionForceShift: 27,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 4416,
    levelEditorLimitEnd: 4800,           // 0x1200 + 192
    levelEditorShiftX: -3860,            // (300 + 192) - 0x1100
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 28,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage7"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level7C",
    groupReplaceIndex: 2076160,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4608,
    screenPositionEnd: 4608,
    walkablePositionYTop: 122,
    walkablePositionYBottom: 43,
    walkablePositionForceShift: 27,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 4416,
    levelEditorLimitEnd: 4800,           // 0x1200 + 192
    levelEditorShiftX: -3860,            // (300 + 192) - 0x1100
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 18,
    specialStrategy: "bossEnemyStrategy3",
    forbiddenEnemyKeys: ["palleteStage7"]
  }
}

// Level 7A:  0100 (256)
// Level 7B:  0B00 (2816)
// Level 7C:  1100 (4352)