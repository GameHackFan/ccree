*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 9 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles all the custom
*               enemy groups for the 9th stage.
*----------------------------------------------------------------------------------------------

; ORG         $A79F4                    ; Replaces A79F4 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  MOVE.W      #$6, ($11A4, A5)          ; Stores 6 inside ($11A4 + A5), all barrels spawned flag.
  RTS                                   ; Returns back to the routine that called this code.
  x29                                   ; Repeat the line above 29 times.


; ORG         $A7A3A                    ; Replaces A7A3A (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x27                                   ; Repeat the line above 27 times.


; ORG         $A7A76                    ; Replaces A7A76 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x27                                   ; Repeat the line above 27 times.


; ORG         $A7AB2                    ; Replaces A7AB2 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x42                                   ; Repeat the line above 42 times.


; ORG         $A7B0A                    ; Replaces A7B0A (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x42                                   ; Repeat the line above 42 times.


; ORG         $A7B64                    ; Replaces A7B64 (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  JSR         $143400                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x31                                   ; Repeat the line above 31 times.


; ORG         $A7BA0                    ; Replaces A7BA0 (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x8                                    ; Repeat the line above 8 times.


; ORG         $A7BB0                    ; Replaces A7BB0 (There is space enough to replace all the code).

                                        ; Block of code that activates the enemy group caller for the boss area.
  CMP.B       #$1, ($28D0, A5)          ; Compares 1 and ($28D0 + A5), stage 9 boss area.
  BNE         $A7BEC                    ; If it is not 1, go to the RTS line.
  MOVE.B      #$1, ($A22, A5)           ; Stores 1 inside ($A22 + A5), activate enemy group caller.
  MOVE.B      #$1, ($A38, A5)           ; Stores 1 inside ($A38 + A5), enemy group caller data.
  MOVE.W      #$12, ($A26, A5)          ; Stores 12 inside ($A26 + A5), the enemy group offset.
  MOVE.W      #$30, ($A5A, A5)          ; Stores 30 inside ($A5A + A5), important value.
  MOVE.L      #$A15A8, ($A56, A5)       ; Stores A15A8 inside ($A56 + A5), important address.
  MOVE.L      #$1FF800, ($AC4, A5)      ; Stores 1FF800 inside ($AC4 + A5), object list address.
  MOVE.W      #$FFFF, ($A7E, A5)        ; Stores FFFF inside ($A7E + A5), time to spawn delay as -1.
  MOVE.W      #$2, ($A24, A5)           ; Stores 2 inside ($A24 + A5), enemy group caller data.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $A7BFA                    ; Replaces A7BFA (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A7C06                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x83                                   ; Repeat the line above 86 times.


; This module has routines to handle how the Stage 9 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A79F4: Executes Custom Enemy Group 1
; 0A7A3A: Executes Custom Lock Group 1
; 0A7A76: Executes Custom Enemy Group 2
; 0A7AB2: Executes Custom Lock Group 2
; 0A7B0A: Executes Custom Lock Group 3
; 0A7B64: Handles Exiting Area 1
; 0A7BA0: Executes Inactive Custom Group 1
; 0A7BB0: Activates Boss Area Custom Enemy Group
; 0A7BFA: Executes Boss Helper Enemy Groups