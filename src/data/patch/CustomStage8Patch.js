export const customStage8Patch = 
{
  priority: 8,
  type: "overwrite",
  filename: "cce_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Area 1 Enemy Group Address
    "682754": ["1F", "00", "00", "B0"],

    // Area 2 Enemy Group Address
    "685436": ["1F", "00", "00", "CC"],



    // Area 1
    // 1st Enemy Group (Normal, 100-160)
    "2076672":
    [
      // Deactivates Objects
      "48", "03", "D4", "5F", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "18", "00", "10", "01", "70", "01", "00", "00",
      "00", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "60", "01", "LA", "NO", "02", "00",
      "1F", "00", "00", "B4", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 2nd Enemy Group (Lock, 160-160)
    "2077696":
    [
      // Enemy
      "58", "00", "80", "00", "C0", "01", "00", "00",
      "00", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "04", "00",
      "1F", "00", "00", "B8", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 3rd Enemy Group (Normal, 160-460)
    "2078720":
    [
      // Enemy
      "18", "00", "80", "01", "E0", "01", "00", "00",
      "00", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "60", "04", "LA", "NO", "06", "00",
      "1F", "00", "00", "BC", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 4th Enemy Group (Lock, 460-460)
    "2079744":
    [
      // Enemy
      "58", "00", "80", "00", "C0", "04", "00", "00",
      "00", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "08", "00",
      "1F", "00", "00", "C0", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 5th Enemy Group (Normal, 460-6F0)
    "2080768":
    [
      // Enemy
      "18", "00", "80", "04", "E0", "04", "00", "00",
      "00", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "F0", "06", "LA", "NO", "0A", "00",
      "1F", "00", "00", "C4", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 6th Enemy Group (Lock, 6F0-6F0)
    "2081792":
    [
      // Enemy
      "58", "00", "80", "00", "50", "07", "00", "00",
      "00", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "12", "00",
      "1F", "00", "00", "C8", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 7th Enemy Group (Lock, 780-780)
    "2082816":
    [
      // Lock Position Restriction
      "88", "03", "80", "07", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "58", "00", "80", "00", "C0", "07", "00", "00",
      "00", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "14", "00",     // LA NO
      "FF", "FF", "FF", "FF", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // Area 2
    // 8th Enemy Group (Normal, B00-C30)
    "2083840":
    [
      // Enemy
      "18", "00", "10", "0B", "50", "0B", "00", "00",
      "00", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "30", "0C", "LA", "NO", "02", "00",
      "1F", "00", "00", "D0", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 9th Enemy Group (Lock, C30-C30)
    "2084864":
    [
      // Enemy
      "18", "00", "30", "0C", "80", "0C", "00", "00",
      "00", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "04", "00",
      "1F", "00", "00", "D4", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 10th Enemy Group (Boss Helper, C00-C80)
    "2085888":
    [
      // Lock Position Restriction
      "88", "03", "80", "0C", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "58", "00", "80", "00", "E0", "0B", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "00", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "06", "00",
      "1F", "00", "00", "D8", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 11th Enemy Group (Boss Helper, C00-C80)
    "2086912":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "0B", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "11", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "06", "00",
      "1F", "00", "00", "DC", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 12th Enemy Group (Boss Helper, C00-C80)
    "2087936":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "0B", "00", "00",
      "E0", "00", "06", "00", "7A", "4E", "02", "00",
      "0A", "00", "08", "10", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "06", "00",
      "1F", "00", "18", "D8", "00", "00", "DD", "DD",   // 1F 00 18 D4 (1st Group)
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],



    // Object Spawn Dispatcher Caller (1st Enemy Group)
    "682882":
    [
      "B9", "4E", "14", "00", "00", "30", "7C", "3B",
      "06", "00", "A4", "11", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (2nd Enemy Group)
    "682914":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (3rd Enemy Group)
    "682974":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (4th Enemy Group)
    "683034":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (5th Enemy Group)
    "683068":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (6th Enemy Group)
    "683114":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (7th Enemy Group)
    "683244":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Exit Area Caller
    "683304":
    [
      "B9", "4E", "14", "00", "00", "34", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E"
    ],

    // Disables Enemy Group (Area 1 End)
    "683384":
    [
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (8th Enemy Group)
    "685498":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (9th Enemy Group)
    "685532":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Activate Boss Spawning (Boss Group)
    "685710":
    [
      "7C", "1B", "01", "00", "94", "78", "7C", "31",
      "06", "00", "04", "00", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (9th Enemy Group)
    "685744":
    [
      "2D", "4A", "4B", "78", "06", "66", "B9", "4E",
      "14", "00", "00", "30", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E"
    ],
  }
}