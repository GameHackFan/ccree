export const editorManagerData = 
{
  romTypeMap:
  {
    fbneo:
    {
      key: "fbneo",
      label: "FBNeo",
      romFileName: "captre.zip",
      converterKey: "hbMameFBNeoMap" 
    },
    hbmame:
    {
      key: "hbmame",
      label: "HBMame",
      romFileName: "captcommh11.zip",
      converterKey: "fbneoHBMameMap" 
    }
  },
  fbneoHBMameMap:
  {
    "cce_re.10f": "c17h11.p1"
  },
  hbMameFBNeoMap:
  {
    "c17h11.p1": "cce_re.10f"
  }
}