export const captreImprovementPatch = 
{
  priority: 13,
  type: "overwrite",
  filename: "cce_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Reduces the Damage Players Take to 2 When Inside a Robot
    "635976": ["6E", "55", "3C", "00"],

    // Reduces the Damage Players Take to 2 When Inside a Robot
    "636052": ["6E", "55", "3C", "00"],

    // Reduces the Damage Players Take to 2 When Inside a Robot
    "636140": ["6E", "55", "3C", "00"],

    // Reduces the Damage Players Take to 2 When Inside a Robot
    "636254": ["6E", "55", "3C", "00"],



    // Randomizes a value in D6
    "1316704":
    [
      "86", "42", "6D", "4A", "1C", "7F", "06", "67",
      "2D", "3C", "1E", "7F", "08", "66", "2D", "3C",
      "10", "28", "6D", "DC", "9A", "11", "46", "06",
      "15", "FC", "FC", "CC", "AB", "02", "06", "22",
      "89", "E0", "89", "E0", "86", "B3", "6D", "52",
      "1C", "7F", "BC", "CC", "00", "00", "FF", "FF",
      "46", "3B", "1E", "7F", "75", "4E"
    ],

    // Randomizes a value in D6 (1 to 16 Iterations)
    "1316784":
    [
      "2D", "30", "10", "28", "6D", "D0", "9A", "11",
      "7C", "C0", "0F", "00", "A2", "61", "C8", "51",
      "FC", "FF", "75", "4E"
    ],

    // Removes Old Randomization
    "1316144":
    [
      "75", "4E", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00"
    ],

    // Randomizes the character and pallete 
    "1316220":
    [
      "35", "4A", "00", "00", "18", "67", "00", "61",
      "2C", "02", "7C", "CC", "03", "00", "46", "11",
      "A0", "00", "00", "61", "20", "02", "7C", "CC",
      "07", "00", "46", "11", "3A", "00", "75", "4E",
      "00", "00", "00", "00", "00", "00", "00", "00"
    ]
  }
}

// NOTE: Remove this patch if the features here
// are added to Captain Commando Readjusted

