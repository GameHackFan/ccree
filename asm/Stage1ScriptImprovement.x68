*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 1 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles the new stage scripting
*               style.
*----------------------------------------------------------------------------------------------

; ORG         $A16E0                    ; Replaces A16E0 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  MOVE.W      #$6, ($11A4, A5)          ; Stores 6 inside ($11A4 + A5), all barrels spawned flag.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.


; ORG         $A16F0                    ; Replaces A16F0 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1700                    ; Replaces A1700 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1710                    ; Replaces A1710 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1720                    ; Replaces A1720 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  MOVE.W      #$2, ($AE6, A5)           ; Stores 2 inside ($AE6 + A5), object spawned flag.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1730                    ; Replaces A1730 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A173C                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.



; This module has routines to handle how the Stage 1 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A16E0: Executes Custom Enemy Group 1
; 0A16F0: Executes Custom Lock Group 1
; 0A1700: Executes Custom Enemy Group 2
; 0A1710: Executes Custom Lock Group 2
; 0A1720: Executes Custom Enemy Group 3
; 0A1730: Executes Boss Helper Enemy Groups