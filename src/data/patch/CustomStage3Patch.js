export const customStage3Patch = 
{
  priority: 3,
  type: "overwrite",
  filename: "cce_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Area 1 Enemy Group Address
    "665220": ["1E", "00", "00", "F0"],

    // Area 2 Enemy Group Address
    "666762": ["1F", "00", "00", "04"],



    // Area 1
    // 1st Enemy Group (Normal, 100-320)
    "2027520":
    [
      // Deactivates Objects
      "48", "03", "A2", "0B", "14", "65", "D4", "65",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "18", "00", "10", "01", "70", "01", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "20", "03", "LA", "NO", "02", "00",
      "1E", "00", "00", "F4", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 2nd Enemy Group (Lock, 320-320)
    "2028544":
    [
      // Enemy
      "58", "00", "80", "00", "80", "03", "00", "00",
      "20", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "04", "00",
      "1E", "00", "00", "F8", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 3rd Enemy Group (Normal, 320-680)
    "2029568":
    [
      // Enemy
      "18", "00", "60", "03", "C0", "03", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      // Enemy
      "18", "00", "60", "04", "C0", "04", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RB",

      "F8", "02", "80", "06", "LA", "NO", "06", "00",
      "1F", "00", "00", "00", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 4th Enemy Group (Lock, 680-680)
    "2031616":
    [
      // Enemy
      "58", "00", "80", "00", "80", "06", "00", "00",
      "20", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "08", "00",     // LA NO
      "FF", "FF", "FF", "FF", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // Area 2
    // 5th Enemy Group (Normal, A00-B20)
    "2032640":
    [
      // Deactivates Objects
      "48", "03", "94", "66", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "18", "00", "10", "0A", "70", "0A", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "20", "0B", "LA", "NO", "02", "00",
      "1F", "00", "00", "08", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 6th Enemy Group (Lock, B20-B20)
    "2033664":
    [
      // Enemy
      "58", "00", "80", "00", "80", "0B", "00", "00",
      "20", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "04", "00",
      "1F", "00", "00", "0C", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 7th Enemy Group (Normal, B20-E00)
    "2034688":
    [
      // Enemy
      "18", "00", "60", "0B", "C0", "0B", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      // Enemy
      "18", "00", "60", "0C", "C0", "0C", "00", "00",
      "20", "00", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RB",

      "F8", "02", "00", "0E", "LA", "NO", "06", "00",
      "1F", "00", "00", "14", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 8th Enemy Group (Lock, E00-E00)
    "2036736":
    [
      // Enemy
      "58", "00", "80", "00", "60", "0E", "00", "00",
      "20", "00", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "08", "00",     // LA NO
      "FF", "FF", "FF", "FF", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 9th Enemy Group (Boss Helper, 1200-1280)
    "2037760":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "11", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "00", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "02", "00",
      "1F", "00", "00", "1B", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 10th Enemy Group (Boss Helper, 1200-1280)
    "2038528":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "11", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "11", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "02", "00",
      "1F", "00", "00", "1E", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 11th Enemy Group (Boss Helper, 1200-1280)
    "2039296":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "11", "00", "00",
      "E0", "00", "06", "00", "7A", "4E", "02", "00",
      "00", "00", "00", "10", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "02", "00",
      "1F", "00", "00", "1B", "00", "00", "DD", "DD",   // 1F 00 00 18 (1st Group)
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],


    // Remove Position Restriction
    "665152": ["00", "00"],

    // Sets Enemy Group Offsets (Area 1)
    "665294":
    [
      "10", "00", "22", "00", "32", "00", "42", "00",
      "52", "00", "62", "00", "72", "00", "72", "00"
    ],

    // Object Spawn Dispatcher Caller (1st Enemy Group)
    "665310":
    [
      "B9", "4E", "14", "00", "00", "30", "7C", "3B",
      "06", "00", "A4", "11", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (2nd Enemy Group)
    "665328":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (3rd Enemy Group)
    "665344":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (4th Enemy Group)
    "665360":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Exit Area Delay Timer
    "665376":
    [
      "7C", "31", "B4", "00", "5C", "00", "68", "54",
      "04", "00", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Exit Area Caller
    "665392":
    [
      "B9", "4E", "14", "00", "60", "34", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
    ],

    // Disables Enemy Group (Area 1 End)
    "665408":
    [
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Sets Enemy Group Offsets (Area 2)
    "666832":
    [
      "1E", "00", "30", "00", "40", "00", "50", "00",
      "60", "00", "70", "00", "70", "00", "70", "00"
    ],

    // Object Spawn Dispatcher Caller (5th Enemy Group)
    "666862":
    [
      "B9", "4E", "14", "00", "00", "30", "7C", "3B",
      "06", "00", "A4", "11", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (6th Enemy Group)
    "666880":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (7th Enemy Group)
    "666896":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (8th Enemy Group)
    "666912":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Exit Area Delay Timer
    "666928":
    [
      "7C", "31", "B4", "00", "5C", "00", "68", "54",
      "04", "00", "75", "4E", "75", "4E", "75", "4E"
    ],

    // Disables Enemy Group (Area 2 End)
    "666944":
    [
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Exit Area Handler
    "667990":
    [
      "6D", "0C", "0A", "00", "26", "0A", "00", "66",
      "56", "E4"
    ],

    // Sets Enemy Group Offsets (Area 3)
    "668126": ["04", "00", "24", "00"],

    // Sets 1st Boss Helper Enemy Group Address
    "668130":
    [
      "7C", "21", "1F", "00", "00", "18", "A2", "00",
      "7C", "31", "FF", "FF", "5C", "00", "68", "54",
      "04", "00", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
    ],

    // Object Spawn Dispatcher Caller (9th Enemy Group)
    "668162":
    [
      "2D", "4A", "4B", "78", "06", "66", "B9", "4E",
      "14", "00", "00", "30", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E"
    ]
  }
}
