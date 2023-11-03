import { featuresPatch } from "./FeaturesPatch";
import { foodHealImprovementPatch } from "./FoodHealImprovementPatch";
import { itemDropImprovementPatch } from "./ItemDropImprovementPatch";
import { randomizerHealth1Patch } from "./RandomizerHealth1Patch";
import { randomizerHealth2Patch } from "./RandomizerHealth2Patch";
import { captreImprovementPatch } from "./CaptreImprovementPatch";
import { deactivateDefaultBossHelperGroupPatch } from
    "./DeactivateDefaultBossHelperGroupPatch";

import { customStage1Patch } from "./CustomStage1Patch";
import { customStage2Patch } from "./CustomStage2Patch";
import { customStage3Patch } from "./CustomStage3Patch";
import { customStage4Patch } from "./CustomStage4Patch";
// import { customStage5Patch } from "./CustomStage5Patch";
import { customStage6Patch } from "./CustomStage6Patch";
import { customStage7Patch } from "./CustomStage7Patch";
import { customStage8Patch } from "./CustomStage8Patch";
import { customStage9Patch } from "./CustomStage9Patch";

import { defaultTextPatch } from "./DefaultTextPatch";
import { levelEditorTextPatch } from "./LevelEditorTextPatch";
import { randomizerTextPatch } from "./RandomizerTextPatch";


export const patchMap = 
{
  customStage1Patch:
  {
    key:    "customStage1Patch",
    label:  "Custom Stage 1 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 1st stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage1Patch,
    show:   false
  },
  customStage2Patch:
  {
    key:    "customStage2Patch",
    label:  "Custom Stage 2 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 2nd stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage2Patch,
    show:   false
  },
  customStage3Patch:
  {
    key:    "customStage3Patch",
    label:  "Custom Stage 3 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 3rd stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage3Patch,
    show:   false
  },
  customStage4Patch:
  {
    key:    "customStage4Patch",
    label:  "Custom Stage 4 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 4th stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage4Patch,
    show:   false
  },
  // customStage5Patch:
  // {
  //   key:    "customStage5Patch",
  //   label:  "Custom Stage 5 Patch",
  //   text:   "This patch is a redirects the object lists to a " +
  //           "different region of the ROM and it is made in a " +
  //           "way that it supports a lot more enemies than the " +
  //           "original 5th stage, but also being dynamic, meaning " + 
  //           "you don't have to use all the space for it to work. " +
  //           "This patch is used by the Level Editor and the " +
  //           "Seed Randomizer",
  //   patch:  customStage5Patch,
  //   show:   false
  // },
  customStage6Patch:
  {
    key:    "customStage6Patch",
    label:  "Custom Stage 6 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 6th stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage6Patch,
    show:   false
  },
  customStage7Patch:
  {
    key:    "customStage7Patch",
    label:  "Custom Stage 7 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 7th stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage7Patch,
    show:   false
  },
  customStage8Patch:
  {
    key:    "customStage8Patch",
    label:  "Custom Stage 8 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 8th stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage8Patch,
    show:   false
  },
  customStage9Patch:
  {
    key:    "customStage9Patch",
    label:  "Custom Stage 9 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 9th stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage9Patch,
    show:   false
  },
  featuresPatch:
  {
    key:    "featuresPatch",
    label:  "Features Patch",
    text:   "This patch adds new code to extend core features. " + 
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  featuresPatch,
    show:   false
  },
  deactivateDefaultBossHelperGroupPatch:
  {
    key:    "deactivateDefaultBossHelperGroupPatch",
    label:  "Deactivate Default Boss Helper Group Patch",
    text:   "This patch disables the default Boss Helper Groups. " + 
            "This is necessary because now the Custom Stage Patches " + 
            "are handling that instead of the bosses, which is " +
            "better for the editor. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  deactivateDefaultBossHelperGroupPatch,
    show:   false
  },
  foodHealImprovementPatch:
  {
    key:    "foodHealImprovementPatch",
    label:  "Food Heal Improvement Patch",
    text:   "This patch changes the amount of bytes the food heal " +
            "values have, from 1 byte to 2 bytes, which is better " + 
            "considering the health values in the game are also " + 
            "bytes. This patch is used by the Level Editor, Seed " + 
            "Randomizer, Character Health Editor and Food Heal " + 
            "Editor.",
    patch:  foodHealImprovementPatch,
    show:   true
  },
  itemDropImprovementPatch:
  {
    key:    "itemDropImprovementPatch",
    label:  "Item Drop Improvement Patch",
    text:   "This patch modifies the way barrels drop items, making " +
            "it more standard, forcing all item drops to be based on " +
            "an list of items, it also adds new list of items to " +
            "better cover all single drop and other random drop " +
            "possibilities. This patch is used by the Level Editor " +
            "and the Seed Randomizer.",
    patch:  itemDropImprovementPatch,
    show:   true
  },
  captreImprovementPatch:
  {
    key:    "captreImprovementPatch",
    label:  "Captain Commando Readjusted Improvement Patch",
    text:   "This patch brings improvements to CAPTRE that has the " +
            "potential to be part of CAPTRE in a future update. " +
            "This patch is used by the Level Editor and the Seed " +
            "Randomizer.",
    patch:  captreImprovementPatch,
    show:   true
  },
  randomizerHealth1Patch:
  {
    key:    "randomizerHealth1Patch",
    label:  "Randomizer Health 1 Patch",
    text:   "This patch changes the players starting health to " + 
            "90 (144) and the player max health to 90 (144). " + 
            "This patch is used by the Seed Randomizer.",
    patch:  randomizerHealth1Patch,
    show:   false
  },
  randomizerHealth2Patch:
  {
    key:    "randomizerHealth2Patch",
    label:  "Randomizer Health 2 Patch",
    text:   "This patch changes the players starting health to " + 
            "90 (144) and the player max health to D8 (216). " + 
            "This patch is used by the Seed Randomizer.",
    patch:  randomizerHealth2Patch,
    show:   false
  },
  randomizerTextPatch:
  {
    key:    "randomizerTextPatch",
    label:  "Randomizer Title Screen Patch",
    text:   "Title screen text patch for the Seed " +
            "Randomizer. Used by the Seed Randomizer.",
    patch:  randomizerTextPatch,
    show:   false
  },
  levelEditorTextPatch:
  {
    key:    "levelEditorTextPatch",
    label:  "Level Editor Title Screen Patch",
    text:   "Title screen text patch for the Level " +
            "Editor. Used by the Level Editor",
    patch:  levelEditorTextPatch,
    show:   false
  },
  defaultTextPatch:
  {
    key:    "defaultTextPatch",
    label:  "Default Title Screen Patch",
    text:   "Title screen text patch for anything " +
            "else besides the Seed Randomizer and " +
            "the Level Editor. Used if no text " +
            "was applied.",
    patch:  defaultTextPatch,
    show:   false
  }
}