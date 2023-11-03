*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 8 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles all the custom
*               enemy groups for the 8th stage.
*----------------------------------------------------------------------------------------------

; ORG         $A6B82                    ; Replaces A6B82 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  MOVE.W      #$6, ($11A4, A5)          ; Stores 6 inside ($11A4 + A5), all barrels spawned flag.
  RTS                                   ; Returns back to the routine that called this code.
  x10                                   ; Repeat the line above 10 times.


; ORG         $A6BA2                    ; Replaces A6BA2 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x26                                   ; Repeat the line above 26 times.


; ORG         $A6BDE                    ; Replaces A6BDE (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x26                                   ; Repeat the line above 26 times.


; ORG         $A6C1A                    ; Replaces A6C1A (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x14                                   ; Repeat the line above 14 times.


; ORG         $A6C3C                    ; Replaces A6C3C (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x19                                   ; Repeat the line above 19 times.


; ORG         $A6C6A                    ; Replaces A6C6A (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x61                                   ; Repeat the line above 61 times.


; ORG         $A6CEC                    ; Replaces A6CEC (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x26                                   ; Repeat the line above 26 times.


; ORG         $A6D28                    ; Replaces A6D28 (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  JSR         $143400                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x36                                   ; Repeat the line above 36 times.


; ORG         $A6D78                    ; Replaces A6D78 (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x36                                   ; Repeat the line above 36 times.


; ORG         $A75BA                    ; Replaces A75BA (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x13                                   ; Repeat the line above 13 times.


; ORG         $A75DC                    ; Replaces A75DC (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x86                                   ; Repeat the line above 86 times.


; ORG         $A768E                    ; Replaces A768E (There is space enough to replace all the code).

                                        ; Block of code that handles boss spawning.
  MOVE.B      #$1, ($7894, A5)          ; Stores 1 inside ($7894 + A5), spawn boss flag.
  MOVE.W      #$6, ($4, A0)             ; Stores 6 inside ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x10                                   ; Repeat the line above 10 times.


; ORG         $A76B0                    ; Replaces A76B0 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A76BC                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x83                                   ; Repeat the line above 86 times.


; This module has routines to handle how the Stage 8 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A6B82: Executes Custom Enemy Group 1
; 0A6BA2: Executes Custom Lock Group 1
; 0A6BDE: Executes Custom Enemy Group 2
; 0A6C1A: Executes Custom Lock Group 2
; 0A6C3C: Executes Custom Enemy Group 3
; 0A6C6A: Executes Custom Lock Group 3
; 0A6CEC: Executes Custom Lock Group 4
; 0A6D28: Handles Exiting Area 1
; 0A6D78: Executes Inactive Custom Group 1
; 0A75BA: Executes Custom Enemy Group 4
; 0A75DC: Executes Custom Lock Group 5
; 0A768E: Handles Boss Spawn
; 0A76B0: Executes Boss Helper Enemy Groups