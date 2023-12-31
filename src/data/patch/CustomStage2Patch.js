export const customStage2Patch = 
{
  priority: 2,
  type: "overwrite",
  filename: "cce_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Area 1 Enemy Group Address
    "663068": ["1E", "00", "00", "D0"],

    // Area 2 Enemy Group Address
    "663908": ["1E", "00", "00", "DC"],



    // Area 1
    // 1st Enemy Group (Normal, 100-380)
    "2019328":
    [
      // Deactivates Objects
      "48", "03", "E2", "0A", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "18", "00", "10", "01", "70", "01", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "80", "03", "LA", "NO", "02", "00",
      "1E", "00", "00", "D4", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 2nd Enemy Group (Lock, 380-380)
    "2020352":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "03", "00", "00",
      "20", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "04", "00",
      "1E", "00", "00", "D8", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 3rd Enemy Group (Lock, 480-480)
    "2021376":
    [
      // Lock Position Restriction
      "88", "03", "80", "04", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "58", "00", "80", "00", "E0", "04", "00", "00",
      "20", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "06", "00",     // LA NO
      "FF", "FF", "FF", "FF", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // Area 2
    // 4th Enemy Group (Normal, 800-980)
    "2022400":
    [
      // Deactivates Objects
      "48", "03", "14", "65", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "18", "00", "10", "08", "70", "08", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "80", "09", "LA", "NO", "02", "00",
      "1E", "00", "00", "E0", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 5th Enemy Group (Lock, 980-980)
    "2023424":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "09", "00", "00",
      "20", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "04", "00",
      "1E", "00", "00", "E4", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 6th Enemy Group (Boss Helper, A00-A80)
    "2024448":
    [
      // Lock Position Restriction
      "88", "03", "00", "0A", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "58", "00", "80", "00", "E0", "09", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "00", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "04", "00",
      "1E", "00", "00", "E8", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 7th Enemy Group (Boss Helper, A00-A80)
    "2025472":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "09", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "11", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "04", "00",
      "1E", "00", "00", "EC", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 8th Enemy Group (Boss Helper, A00-A80)
    "2026496":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "09", "00", "00",
      "E0", "00", "06", "00", "7A", "4E", "02", "00",
      "00", "00", "00", "10", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "04", "00",
      "1E", "00", "18", "E8", "00", "00", "DD", "DD",   // 1E 00 18 E4 (1st Group)
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],



    // Sets Enemy Group Offsets (Area 1)
    "663110":
    [
      "10", "00", "20", "00", "30", "00", "40", "00",
      "50", "00", "50", "00", "50", "00", "50", "00"
    ],

    // Object Spawn Dispatcher Caller (1st Enemy Group)
    "663126":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (2nd Enemy Group)
    "663142":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (3rd Enemy Group)
    "663158":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Exit Area Delay Timer
    "663174":
    [
      "7C", "31", "B4", "00", "5C", "00", "68", "54",
      "04", "00", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Exit Area Caller
    "663190":
    [
      "B9", "4E", "14", "00", "60", "34", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Disables Enemy Group (Area 1 End)
    "663206":
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
      "75", "4E", "75", "4E", "75", "4E"
    ],

    // Sets Enemy Group Offsets (Area 2)
    "663928": ["1C", "00", "2C", "00", "3C", "00"],

    // Object Spawn Dispatcher Caller (4th Enemy Group)
    "663956":
    [
      "B9", "4E", "14", "00", "00", "30", "7C", "3B",
      "06", "00", "A4", "11", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (5th Enemy Group)
    "663972":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (6th Enemy Group)
    "663988":
    [
      "2D", "4A", "4B", "78", "06", "66", "B9", "4E",
      "14", "00", "00", "30", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ]
  }
}
