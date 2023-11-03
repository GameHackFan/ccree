export const level4EnemyGroup =
{
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level4A",
    groupReplaceIndex: 2039808,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 384,
    screenPositionEnd: 384,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 192,
    levelEditorLimitEnd: 576,          // 0x180 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 7,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage4"]
  },


  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level4B",
    groupReplaceIndex: 2040832,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1280,
    screenPositionEnd: 1280,
    walkablePositionYTop: 117,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 1088,
    levelEditorLimitEnd: 1472,         // 0x500 + 192
    levelEditorShiftX: -788,           // (300 + 192) - 0x500
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage4"]
  },


  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level4C",
    groupReplaceIndex: 2041856,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2432,
    screenPositionEnd: 2432,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 2240,
    levelEditorLimitEnd: 2624,         // 0x980 + 192
    levelEditorShiftX: -1812,          // (300 + 192) - 0x900
    levelEditorShiftY: 0,
    defaultAmount: 18,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage4"]
  },


  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level4D",
    groupReplaceIndex: 2042880,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3920,
    screenPositionEnd: 3920,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 3728,
    levelEditorLimitEnd: 4112,         // 0xF50 + 192
    levelEditorShiftX: -3092,          // (300 + 192) - 0xE00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenEnemyKeys: ["palleteStage4", "rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level4D",
    groupReplaceIndex: 2043904,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3920,
    screenPositionEnd: 3920,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 3728,
    levelEditorLimitEnd: 4112,         // 0xF50 + 192
    levelEditorShiftX: -3092,          // (300 + 192) - 0xE00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage4", "rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level4D",
    groupReplaceIndex: 2044928,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3920,
    screenPositionEnd: 3920,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 3728,
    levelEditorLimitEnd: 4112,         // 0xF50 + 192
    levelEditorShiftX: -3092,          // (300 + 192) - 0xE00
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage4", "rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  }
}

// Level 4A:  0100 (256)
// Level 4B:  0500 (1280)
// Level 4C:  0900 (2304)
// Level 4D:  0E00 (3584)