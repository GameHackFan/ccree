export const level1EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level1",
    groupReplaceIndex: 2011136,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 272,
    screenPositionEnd: 820,
    walkablePositionYTop: 197,
    walkablePositionYBottom: 138,
    walkablePositionForceShift: 128,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 1040,         // 0x350 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 6,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage1"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level1",
    groupReplaceIndex: 2012160,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 848,
    screenPositionEnd: 848,
    walkablePositionYTop: 197,
    walkablePositionYBottom: 138,
    walkablePositionForceShift: 128,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 656,
    levelEditorLimitEnd: 1040,          // 0x350 + 192
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage1"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level1",
    groupReplaceIndex: 2013184,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 860,
    screenPositionEnd: 1190,
    walkablePositionYTop: 197,
    walkablePositionYBottom: 138,
    walkablePositionForceShift: 128,
    levelEditorLimitStart: 656,
    levelEditorLimitEnd: 1444,
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 7,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage1"]
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level1",
    groupReplaceIndex: 2014208,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1376,
    screenPositionEnd: 1376,
    walkablePositionYTop: 197,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 128,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 1184,
    levelEditorLimitEnd: 1568,          // 0x560 + 192
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 120,
    defaultAmount: 2,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage1"]
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level1",
    groupReplaceIndex: 2015232,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1400,
    screenPositionEnd: 1870,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 128,
    levelEditorLimitStart: 1184,
    levelEditorLimitEnd: 2368,
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 128,
    defaultAmount: 0,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage1"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level1",
    groupReplaceIndex: 2016256,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2048,
    screenPositionEnd: 2176,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 128,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 1856,
    levelEditorLimitEnd: 2368,          // 0x880 + 192
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 128,
    defaultAmount: 3,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenEnemyKeys: ["palleteStage1", "rightSideSpawn", "dynamicBossArea"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level1",
    groupReplaceIndex: 2017280,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2048,
    screenPositionEnd: 2176,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 128,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 1856,
    levelEditorLimitEnd: 2368,          // 0x880 + 192
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 128,
    defaultAmount: 3,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage1", "rightSideSpawn", "dynamicBossArea"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level1",
    groupReplaceIndex: 2018304,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2048,
    screenPositionEnd: 2176,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    walkablePositionForceShift: 128,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 1856,
    levelEditorLimitEnd: 2368,          // 0x880 + 192
    levelEditorShiftX: 236,             // (300 + 192) - 0x100
    levelEditorShiftY: 128,
    defaultAmount: 3,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage1", "rightSideSpawn", "dynamicBossArea"],
    forbiddenRangeList: ["outsideRight"]
  }
}

// Level 1:  0100 (256)

