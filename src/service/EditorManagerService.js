import { editorManagerData } from "../data/default/EditorManagerData";
import { romService } from "./ROMService";
import { patchMap } from "../data/patch/PatchMap";
import { modificationService } from "./ModificationService";
import { patchService } from "./PatchService";


class EditorManagerService
{
  convertAndSetRom = (rom) =>
  {
    this.convertROM(rom, editorManagerData.hbMameFBNeoMap);
    romService.setROM(rom);
  }

  generateROM = (romTypeMapKey, hackAuthor) =>
  {
    if(romService.isROMReady())
    {
      this.addDefaultTextIfNoText();
      modificationService.apply();
      romService.addHackAuthor(hackAuthor);
      let rom = romService.getGeneratedROM();
      let rt = editorManagerData.romTypeMap[romTypeMapKey];
      let cmk = rt ? rt.converterKey : "hbMameFBNeoMap";
      let cm = editorManagerData[cmk];

      if(cm)
        this.convertROM(rom, cm);

      return rom;
    }

    throw new Error("There isn't a ROM ready!");
  }

  cloneROM = () =>
  {
    romService.cloneROM();
  }

  addDefaultTextIfNoText = () =>
  {
    if(!(patchService.get(20)?.priority === 20))
      patchService.addToModificationQueue(patchMap.defaultTextPatch.key)
  }

  convertROM = (rom, converterMap) =>
  {
    Object.keys(converterMap).forEach((k) =>
    {
      if(rom[k])
      {
        rom[converterMap[k]] = rom[k];
        delete rom[k];
      }
    });
  }

  getROMTypeList = () =>
  {
    const rtm = editorManagerData.romTypeMap;
    return Object.keys(rtm).map((key) => {return rtm[key]});
  }

  getROMName = (setRomTypeMapKey) =>
  {
    let cm = editorManagerData.romTypeMap[setRomTypeMapKey];
    return cm ? cm.romFileName : "captre.zip";
  }
}


export const editorManagerService = new EditorManagerService();