export const level6EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level6A",
    groupReplaceIndex: 2056192,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 272,
    screenPositionEnd: 550,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 770,
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage6"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level6A",
    groupReplaceIndex: 2056192,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 560,
    screenPositionEnd: 840,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 360,
    levelEditorLimitEnd: 1048,         // 0x358 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage6"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level6A",
    groupReplaceIndex: 2058240,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 856,
    screenPositionEnd: 856,
    walkablePositionYTop: 93,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 664,
    levelEditorLimitEnd: 1048,         // 0x358 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 10,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage6"]
  },


  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level6B",
    groupReplaceIndex: 2059264,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1808,
    screenPositionEnd: 2360,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 1600,         // 0x700 - 192
    levelEditorLimitEnd: 2576,           // 0x950 + 192
    levelEditorShiftX: -1300,            // (300 + 192) - 0x700
    levelEditorShiftY: 0,
    defaultAmount: 16,
    maxAmount: 40,
    forbiddenEnemyKeys: ["palleteStage6"]
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level6B",
    groupReplaceIndex: 2060288,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2384,
    screenPositionEnd: 2384,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 2192,
    levelEditorLimitEnd: 2576,           // 0x950 + 192
    levelEditorShiftX: -1300,            // (300 + 192) - 0x700
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["palleteStage6"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level6B",
    groupReplaceIndex: 2061312,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2744,
    screenPositionEnd: 2936,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2552,
    levelEditorLimitEnd: 3128,           // 0xB78 + 192
    levelEditorShiftX: -1300,            // (300 + 192) - 0x700
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenEnemyKeys: ["palleteStage6", "rightSideSpawn",
        "dynamicBossArea", "pallete6thBossArea"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level6B",
    groupReplaceIndex: 2062336,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2744,
    screenPositionEnd: 2936,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2552,
    levelEditorLimitEnd: 3128,           // 0xB78 + 192
    levelEditorShiftX: -1300,            // (300 + 192) - 0x700
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage6", "rightSideSpawn",
        "dynamicBossArea", "pallete6thBossArea"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level6B",
    groupReplaceIndex: 2063360,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2744,
    screenPositionEnd: 2936,
    walkablePositionYTop: 101,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2552,
    levelEditorLimitEnd: 3128,           // 0xB78 + 192
    levelEditorShiftX: -1300,            // (300 + 192) - 0x700
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["palleteStage6", "rightSideSpawn",
        "dynamicBossArea", "pallete6thBossArea"],
    forbiddenRangeList: ["outsideRight"]
  }
}

// Level 6A:  0100 (256)
// Level 6B:  0700 (1792)