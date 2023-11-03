export const level2EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level2A",
    groupReplaceIndex: 2019328,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 272,
    screenPositionEnd: 880,
    walkablePositionYTop: 53,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 1088,         // 0x380 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 8,
    maxAmount: 40
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level2A",
    groupReplaceIndex: 2020352,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 896,
    screenPositionEnd: 896,
    walkablePositionYTop: 53,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 704,
    levelEditorLimitEnd: 1088,         // 0x380 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy"
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level2A",
    groupReplaceIndex: 2021376,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1152,
    screenPositionEnd: 1152,
    walkablePositionYTop: 53,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 960,
    levelEditorLimitEnd: 1344,         // 0x480 + 192
    levelEditorShiftX: 236,            // (300 + 192) - 0x100
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenEnemyKeys: ["rightSideSpawn"],
    forbiddenRangeList: ["outsideRight"]
  },


  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level2B",
    groupReplaceIndex: 2022400,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2064,
    screenPositionEnd: 2420,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    levelEditorLimitStart: 1856,
    levelEditorLimitEnd: 2624,         // 0x980 + 192
    levelEditorShiftX: -1556,          // (300 + 192) - 0x800
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 40
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level2B",
    groupReplaceIndex: 2023424,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2432,
    screenPositionEnd: 2432,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    singleScreenGroup: true,
    levelEditorLimitStart: 2240,
    levelEditorLimitEnd: 2624,         // 0x980 + 192
    levelEditorShiftX: -1556,          // (300 + 192) - 0x800
    levelEditorShiftY: 0,
    defaultAmount: 10,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy"
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Enemy Group 1",
    background: "level2B",
    groupReplaceIndex: 2024448,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2560,
    screenPositionEnd: 2688,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2368,
    levelEditorLimitEnd: 2880,         // 0xA80 + 192
    levelEditorShiftX: -1556,          // (300 + 192) - 0x800
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenEnemyKeys: ["rightSideSpawn", "dynamicBossArea"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Enemy Group 2",
    background: "level2B",
    groupReplaceIndex: 2025472,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2560,
    screenPositionEnd: 2688,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2368,
    levelEditorLimitEnd: 2880,         // 0xA80 + 192
    levelEditorShiftX: -1556,          // (300 + 192) - 0x800
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["rightSideSpawn", "dynamicBossArea"],
    forbiddenRangeList: ["outsideRight"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Enemy Group 3",
    background: "level2B",
    groupReplaceIndex: 2026496,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2560,
    screenPositionEnd: 2688,
    walkablePositionYTop: 85,
    walkablePositionYBottom: 10,
    mustHaveSpawnDelayTime: true,
    groupStartSpawnDelay: 240,
    levelEditorLimitStart: 2368,
    levelEditorLimitEnd: 2880,         // 0xA80 + 192
    levelEditorShiftX: -1556,          // (300 + 192) - 0x800
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenEnemyKeys: ["rightSideSpawn", "dynamicBossArea"],
    forbiddenRangeList: ["outsideRight"]
  }
}

// Level 2A:  0100 (256)
// Level 2B:  0800 (2048)