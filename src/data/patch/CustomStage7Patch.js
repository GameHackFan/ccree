export const customStage7Patch = 
{
  priority: 7,
  type: "overwrite",
  filename: "cce_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Area 2 Enemy Group Address
    "675140": ["1F", "00", "00", "98"],



    // Area 1
    // 1st Enemy Group (Normal, 100-4F0)
    "2064384":
    [
      // Deactivates Objects
      "48", "03", "A2", "0B", "62", "0C", "22", "0D",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "18", "00", "10", "01", "70", "01", "00", "00",
      "60", "06", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      // Enemy
      "18", "00", "10", "02", "70", "02", "00", "00",
      "60", "06", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RB",

      "F8", "02", "F0", "04", "LA", "NO", "04", "00",
      "1F", "00", "00", "88", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 2nd Enemy Group (Lock, 4F0-4F0)
    "2066432":
    [
      // Enemy
      "58", "00", "80", "00", "50", "05", "00", "00",
      "60", "06", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "06", "00",
      "1F", "00", "00", "8C", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 3rd Enemy Group (Normal, 4F0-640)
    "2067456":
    [
      // Enemy
      "18", "00", "00", "05", "60", "05", "00", "00",
      "00", "06", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      "F8", "02", "40", "06", "LA", "NO", "08", "00",
      "1F", "00", "00", "90", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 4th Enemy Group (Lock, 640-640)
    "2068480":
    [
      // Enemy
      "58", "00", "80", "00", "A0", "06", "00", "00",
      "A0", "05", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "0A", "00",
      "1F", "00", "00", "94", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 5th Enemy Group (Lock, 780-780)
    "2069504":
    [
      // Lock Position Restriction
      "88", "03", "80", "07", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "58", "00", "80", "00", "E0", "07", "00", "00",
      "40", "05", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "0C", "00",     // LA NO
      "FF", "FF", "FF", "FF", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // Area 2
    // 6th Enemy Group (Normal, B00-E20)
    "2070528":
    [
      // Deactivates Objects
      "48", "03", "A2", "0B", "62", "0C", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "18", "00", "10", "0B", "70", "0B", "00", "00",
      "20", "05", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RA",

      // Enemy
      "18", "00", "10", "0D", "70", "0D", "00", "00",
      "20", "05", "03", "00", "5C", "26", "00", "00",
      "00", "00", "18", "04", "00", "00", "00", "RB",

      "F8", "02", "20", "0E", "LA", "NO", "02", "00",
      "1F", "00", "00", "A0", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 7th Enemy Group (Lock, E20-E20)
    "2072576":
    [
      // Enemy
      "58", "00", "80", "00", "70", "0E", "00", "00",
      "20", "05", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "LA", "NO", "04", "00",
      "1F", "00", "00", "A4", "00", "01", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 8th Enemy Group (Lock, E20-F80)
    "2073600":
    [
      // Lock Position Restriction
      "88", "03", "80", "0F", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "58", "00", "80", "00", "60", "0F", "00", "00",
      "20", "05", "03", "00", "D6", "A2", "00", "00",
      "00", "00", "18", "06", "00", "00", "00", "RA",

      "F8", "02", "00", "00", "00", "00", "06", "00",     // LA NO
      "FF", "FF", "FF", "FF", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // Area 4
    // 9th Enemy Group (Boss Helper, 1100-1200)
    "2074624":
    [
      // Lock Position Restriction
      "88", "03", "00", "12", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemy
      "58", "00", "80", "00", "E0", "11", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "00", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "0C", "00",
      "1F", "00", "00", "AB", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 10th Enemy Group (Boss Helper, 1100-1200)
    "2075392":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "11", "00", "00",
      "E0", "00", "02", "00", "86", "50", "00", "00",
      "11", "00", "00", "01", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "0C", "00",
      "1F", "00", "00", "AE", "00", "00", "DD", "DD",
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],

    // 11th Enemy Group (Boss Helper, 1100-1200)
    "2076160":
    [
      // Enemy
      "58", "00", "80", "00", "E0", "11", "00", "00",
      "E0", "00", "06", "00", "7A", "4E", "02", "00",
      "00", "00", "00", "10", "02", "00", "00", "RA",

      "F8", "02", "00", "00", "HA", "NO", "0C", "00",
      "1F", "00", "18", "AB", "00", "00", "DD", "DD",   // 1F 00 18 A8 (1st Group)
      "DD", "DD", "DD", "DD", "DD", "DD", "DD", "DD"
    ],



    // Sets 1st Enemy Group Address
    "677840":
    [
      "7C", "21", "1F", "00", "00", "80", "A2", "00",
      "7C", "31", "02", "00", "04", "00", "7C", "3B",
      "16", "00", "E2", "0A", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (1st Enemy Group)
    "677876":
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

    // Object Spawn Dispatcher Caller (2nd Enemy Group)
    "678224":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (3rd Enemy Group)
    "678238":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (4th Enemy Group)
    "678278":
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
      "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (5th Enemy Group)
    "678396":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E"
    ],

    // Exit Area Delay Timer
    "678424":
    [
      "7C", "31", "B4", "00", "5C", "00", "68", "54",
      "04", "00", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E"
    ],

    // Exit Area Caller
    "678446":
    [
      "B9", "4E", "14", "00", "60", "34", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E"
    ],

    // Disables Enemy Group (Area 1 End)
    "678476":
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
      "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (6th Enemy Group)
    "675238":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (7th Enemy Group)
    "675252":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (8th Enemy Group)
    "675300":
    [
      "B9", "4E", "14", "00", "00", "30", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E"
    ],

    // Exit Area Caller
    "675360":
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
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
    ],

    // Disables Enemy Group (Area 2 End)
    "675450":
    [
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
    ],

    // Activates Enemy Groups For The Boss Area
    "675466":
    [
      "2D", "0C", "03", "00", "D0", "28", "34", "66",
      "7C", "1B", "01", "00", "22", "0A", "7C", "1B",
      "01", "00", "38", "0A", "7C", "3B", "0C", "00",
      "26", "0A", "7C", "3B", "22", "00", "5A", "0A",
      "7C", "2B", "0A", "00", "A8", "15", "56", "0A",
      "7C", "2B", "1F", "00", "00", "A8", "C4", "0A",
      "7C", "3B", "FF", "FF", "7E", "0A", "7C", "3B",
      "02", "00", "24", "0A", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E", "75", "4E", "75", "4E",
      "75", "4E", "75", "4E"
    ],

    // Object Spawn Dispatcher Caller (9th Enemy Group)
    "675550":
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
      "75", "4E", "75", "4E"
    ]
  }
}
