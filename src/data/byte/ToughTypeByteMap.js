export const toughTypeByteMap =
{
  mardia:
  [
    "18", "00", "RR", "RR", "RR", "RR", "00", "00",
    "RR", "RR", "03", "00", "D6", "A2", "00", "00",
    "00", "00", "00", "06", "02", "00", "00", "RR"
  ],

  musashi:
  [
    "18", "00", "RR", "RR", "RR", "RR", "00", "00",
    "RR", "RR", "02", "00", "5C", "D1", "00", "00",
    "00", "00", "00", "03", "02", "00", "00", "RR"
  ],

  z:
  [
    "18", "00", "RR", "RR", "RR", "RR", "00", "00",
    "RR", "RR", "03", "00", "5C", "26", "00", "00",
    "00", "00", "00", "04", "02", "00", "00", "00"
  ],

  zItemDrop:
  [
    "18", "00", "RR", "RR", "RR", "RR", "00", "00",
    "RR", "RR", "03", "00", "5C", "26", "01", "00",
    "00", "00", "00", "04", "02", "00", "00", "RR"
  ]
}


/*
  Z pointer is 0003265C.

  COCO TSTS PXPX ELEL PYPY EAEAEAEA PIPIPIPI I1I1 TTTT I2 RG
  
  CO: Code offset, what code will be called to spawn the object.
  TS: Trigger Spawn, 2 bytes.
  PX: Position X
  PY: Position Y

  EL: Elevation.
  EA: Enemy Address / Pointer, 4 bytes.
  PI: Posture ID.
  TT: Timer, it affected how long the enemy will take to become active.
  I1: Unknown ID, it affected the character displayed in the HUD after taking damage.
  I2: Unknown ID, it changed to another character for a few sprites.
  RG: Rage, it affects:
      The amount of damage the enemy does when he hits.
      How much HP he has.
      His rage, how aggressive he is.
      Very sensible value, high values make the enemy kill you with a single hit.
*/