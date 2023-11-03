import { enemyTypeStrategy } from "./EnemyTypeStrategy";
import { enemyInsideTypeStrategy } from "./EnemyInsideTypeStrategy";
import { enemyAndBossTypeStrategy } from "./EnemyAndBossTypeStrategy";
import { softEnemyTypeStrategy } from "./SoftEnemyTypeStrategy";
import { toughEnemyTypeStrategy } from "./ToughEnemiesTypeStrategy";
import { weakBossTypeStrategy } from "./WeakBossTypeStrategy";
import { strongBossTypeStrategy } from "./StrongBossTypeStrategy";

import { anyRobotTypeStrategy } from "./AnyRobotTypeStrategy";
import { anyUtilityTypeStrategy } from "./AnyUtilityTypeStrategy";
import { anyWeaponTypeStrategy } from "./AnyWeaponTypeStrategy";
import { anyTreasureTypeStrategy } from "./AnyTreasureTypeStrategy";
import { anyFoodTypeStrategy } from "./AnyFoodTypeStrategy";
import { badFoodTypeStrategy } from "./BadFoodTypeStrategy";
import { averageFoodTypeStrategy } from "./AverageFoodTypeStrategy";
import { goodFoodTypeStrategy } from "./GoodFoodTypeStrategy";

import { anyFallingUtilityTypeStrategy } from "./AnyFallingUtilityTypeStrategy";
import { anyFallingWeaponTypeStrategy } from "./AnyFallingWeaponTypeStrategy";
import { anyFallingTreasureTypeStrategy } from "./AnyFallingTreasureTypeStrategy";
import { anyFallingFoodTypeStrategy } from "./AnyFallingFoodTypeStrategy";
import { badFallingFoodTypeStrategy } from "./BadFallingFoodTypeStrategy";
import { averageFallingFoodTypeStrategy } from "./AverageFallingFoodTypeStrategy";
import { goodFallingFoodTypeStrategy } from "./GoodFallingFoodTypeStrategy";


export const randomizerEnemyStrategy = 
{
  enemies: enemyTypeStrategy,
  enemiesInside: enemyInsideTypeStrategy,
  enemiesAndBosses: enemyAndBossTypeStrategy,
  softEnemies: softEnemyTypeStrategy, 
  toughEnemies: toughEnemyTypeStrategy,
  weakBosses: weakBossTypeStrategy,
  strongBosses: strongBossTypeStrategy,

  anyRobot: anyRobotTypeStrategy,
  anyUtilities: anyUtilityTypeStrategy,
  anyWeapon: anyWeaponTypeStrategy,
  anyTreasure: anyTreasureTypeStrategy,
  anyFood: anyFoodTypeStrategy,
  badFood: badFoodTypeStrategy,
  averageFood: averageFoodTypeStrategy,
  goodFood: goodFoodTypeStrategy,

  anyFallingUtilities: anyFallingUtilityTypeStrategy,
  anyFallingWeapon: anyFallingWeaponTypeStrategy,
  anyFallingTreasure: anyFallingTreasureTypeStrategy,
  anyFallingFood: anyFallingFoodTypeStrategy,
  badFallingFood: badFallingFoodTypeStrategy,
  averageFallingFood: averageFallingFoodTypeStrategy,
  goodFallingFood: goodFallingFoodTypeStrategy,
}