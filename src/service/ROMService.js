class ROMService
{
  applyBuildPatch = (patch) =>
  {
    const fileBytes = generatedROM[patch.filename];

    if(fileBytes)
    {
      let buildBytes = [];
      let copyStart = patch.buildStart;
      let copyEnd;

      Object.keys(patch.data).forEach((dataKey) => 
      {
        const replaceIndexes = dataKey.split("_");
        copyEnd = parseInt(replaceIndexes[0]);
        buildBytes = buildBytes.concat(fileBytes.slice(copyStart, copyEnd));
        copyStart = parseInt(replaceIndexes[1]) + 1;
        const enemyMap = patch.data[dataKey];

        Object.keys(enemyMap).forEach((enemyId) =>
        {
          const bytes = enemyMap[enemyId]
          const fbs = this.getBytesAsDecimal(bytes, patch.byteFormat);
          buildBytes = buildBytes.concat(fbs);
        });
      });

      buildBytes = buildBytes.concat(fileBytes.slice(copyStart, patch.buildEnd));
      const desiredLength = patch.buildEnd - patch.buildStart;

      while(buildBytes.length < desiredLength)
        buildBytes.push(0);

      if(buildBytes.length > desiredLength)
        buildBytes = buildBytes.slice(0, desiredLength);

      const owPatch = {};
      owPatch.type = "overwrite";
      owPatch.filename = "cce_re.10f";
      owPatch.data = {};
      owPatch.data[patch.buildStart.toString()] = buildBytes;
      this.applyOverwritePatch(owPatch);
    }
  }

  applyOverwritePatch = (patch) =>
  {
    const fileBytes = generatedROM[patch.filename];

    if(fileBytes)
    {
      const isHex = patch.byteFormat === "hex";

      Object.keys(patch.data).forEach((dataKey) => 
      {
        const index = parseInt(dataKey);

        if(!isNaN(index))
        {
          const nbs = patch.data[dataKey];

          for(let i = 0; i < nbs.length; i++)
            fileBytes[index + i] = isHex ? parseInt(nbs[i], 16) : nbs[i];
        }
      });
    }
  }

  applyPatch = (patch) =>
  {
    if(patch.type === "build")
      this.applyBuildPatch(patch);
    else if(patch.type === "overwrite")
      this.applyOverwritePatch(patch);
  }

  applyPatches = (patches) =>
  {
    Object.keys(patches).forEach((field) =>
    {
      this.applyPatch(patches[field]);
    });
  }

  addHackAuthor = (hackAuthor) =>
  {
    const checkBytes = this.getAuthorByteIndex();
    const filename = "cce_re.10f";
    const checkIndex = this.indexOfBytes(filename, checkBytes, "hex", 1314240);

    if(checkIndex > -1)
    {
      const byteIndex = checkIndex + checkBytes.length;
      let ha = hackAuthor ? hackAuthor.trim() : null;
      ha = ha ? ha : "Unknown author";
      ha = "************ " + ha + " ************";
      const remove = (ha.length - 20) / 2;
      ha = ha.substring(remove, ha.length - remove);
      ha = ha.length > 20 ? ha.substring(0, 20) : ha;
      const hexBytes = romService.convertStringToROMBytes(ha);
      this.setBytes(filename, byteIndex, hexBytes, "hex");
    }
  }

  convertHexArrayToByteArray = (hexArray) =>
  {
    const byteArray = [];

    for(let i = 0; i < hexArray.length; i++)
      byteArray.push(parseInt(hexArray[i], 16));

    return byteArray;
  }

  convertNumberToROMBytes = (number, byteAmount) =>
  {
    const bytes = [];
    let hex = (number >>> 0).toString(16);

    if(number > -1)
    {
      hex = "0".repeat((2 * byteAmount) - hex.length) + hex;
      
      for(let i = 0; i < byteAmount; i++)
        bytes[i] = hex.slice(i * 2, (i + 1) * 2);
      
      bytes.reverse();
    }
    else
    {
      const startIndex = hex.length - (byteAmount * 2);
      const hexChars = hex.substring(startIndex, hex.length);

      for(let i = 0; i < byteAmount; i++)
      {
        const index = i * 2;
        bytes[i] = hexChars[index] + hexChars[index + 1];
      }
    }

    return bytes;
  }

  convertStringToROMBytes = (text) =>
  {
    const bytes = [];

    for(let i = 0; i < text.length - 1; i += 2)
    {
      bytes.push(text.charCodeAt(i + 1).toString(16));
      bytes.push(text.charCodeAt(i).toString(16));
    }

    return bytes;
  }

  convertDecimalArrayToROMBytes = (byteArray) =>
  {
    const bytes = [];

    for(let i = 0; i < byteArray.length - 1; i += 2)
    {
      bytes.push(byteArray[i + 1] ? byteArray[i + 1] : 0);
      bytes.push(byteArray[i] ? byteArray[i] : 0);
    }

    return bytes;
  }

  cloneROM = () =>
  {
    generatedROM = {};
    Object.keys(rom).forEach((e) => {generatedROM[e] = rom[e].slice();});
    this.checkROM();

    if(!romReady)
    {
      generatedROM = null;
      const m = "The ROM loaded is invalid! Load the Original ROM of the Game!";
      throw new Error(m);
    }
  }

  getBytesAsDecimal = (bytes, byteFormat) =>
  {
    return byteFormat === "hex" ?
        this.convertHexArrayToByteArray(bytes) : bytes;
  }

  setByte = (filename, byteIndex, value) =>
  {
    const fileBytes = generatedROM[filename];

    if(fileBytes && !isNaN(value) && value > -1 && value < 256)
      fileBytes[byteIndex] = value;
  }

  setHexByte = (filename, byteIndex, value) =>
  {
    const fix = parseInt(value, 16);
    this.setByte(filename, byteIndex, fix);
  }

  setBytes = (filename, byteIndex, bytes, byteFormat) =>
  {
    if(byteIndex > -1)
    {
      const fbs = this.getBytesAsDecimal(bytes, byteFormat);
      const fileBytes = generatedROM[filename];
      fbs.forEach((byte, index) => fileBytes[byteIndex + index] = byte);
    }
  }

  getByte = (filename, byteIndex) =>
  {
    return this.getFileBytes(filename)[byteIndex];
  }

  getBytes = (filename, byteIndex, amount) =>
  {
    return this.getFileBytes(filename).slice(byteIndex, byteIndex + amount);
  }

  indexOfBytes = (filename, bytes, byteFormat, startIndex) =>
  {
    const fileBytes = generatedROM[filename];

    if(fileBytes)
    {
      const fbs = this.getBytesAsDecimal(bytes, byteFormat);
      const checkBytes = (element, index, romBytes) =>
      {
        for(let i = 0; i < fbs.length; i++)
        {
          if(fbs[i] !== romBytes[index + i])
            return false;
        }
        
        return true;
      };
      return fileBytes.findIndex(checkBytes, startIndex);
    }

    return -1;
  }

  checkROM = () =>
  {
    const filename = "cce_re.10f";
    const mainFile = generatedROM[filename];

    if(mainFile && mainFile.length === 2097152)
    {
      const bytesToCheck = this.getBytesToCheck();
      const index = this.indexOfBytes(filename, bytesToCheck, "hex", 1314112);
      romReady = index > -1;
      return romReady;
    }

    romReady = false;
    return romReady;
  }

  getFileBytes = (filename) =>
  {
    const gr = generatedROM ? generatedROM : {};
    const fileBytes = gr[filename];
    return fileBytes ? fileBytes : [];
  }

  setROM = (newROM) =>
  {
    rom = newROM;
  }

  getGeneratedROM = () =>
  {
    return generatedROM;
  }

  isROMReady = () =>
  {
    return romReady;
  }

  getBytesToCheck = () =>
  {
    return [
      "65", "52", "64", "61", "75", "6A", "74", "73",
      "64", "65", "76", "20", "2E", "31", "20", "32",
      "62", "28", "20", "79", "61", "47", "65", "6D",
      "61", "48", "6B", "63", "61", "46", "29", "6E"
    ];
  }

  getAuthorByteIndex = () =>
  {
    return [
      "48", "20", "63", "61", "20", "6B", "75", "41",
      "68", "74", "72", "6F", "20", "3A"
    ];
  }

  constructor()
  {
    rom = null;
    generatedROM = null;
    romReady = false;
  }
}


let rom, generatedROM, romReady;

export const romService = new ROMService();