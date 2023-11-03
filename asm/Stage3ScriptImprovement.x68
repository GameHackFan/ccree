*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 3 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles all the custom
*               enemy groups for the 3th stage.
*----------------------------------------------------------------------------------------------

; ORG         $A26DE                    ; Replaces A26DE (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  MOVE.W      #$6, ($11A4, A5)          ; Stores 6 inside ($11A4 + A5), all barrels spawned flag.
  RTS                                   ; Returns back to the routine that called this code.
  x3                                    ; Repeat the line above 3 times.


; ORG         $A26F0                    ; Replaces A26F0 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A2700                    ; Replaces A2700 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A2710                    ; Replaces A2710 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A2720                    ; Replaces A2720 (There is space enough to replace all the code).

                                        ; Block of code that delays exiting the area.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.


; ORG         $A2730                    ; Replaces A2730 (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.  
  JSR         $143460                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A2740                    ; Replaces A2740 (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x32                                   ; Repeat the line above 32 times.


; ORG         $A2CEE                    ; Replaces A2CEE (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  MOVE.W      #$6, ($11A4, A5)          ; Stores 6 inside ($11A4 + A5), all barrels spawned flag.
  RTS                                   ; Returns back to the routine that called this code.
  x3                                    ; Repeat the line above 3 times.


; ORG         $A2D00                    ; Replaces A2D00 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A2D10                    ; Replaces A2D10 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A2D20                    ; Replaces A2D20 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A2D30                    ; Replaces A2D30 (There is space enough to replace all the code).

                                        ; Block of code that delays exiting the area.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.


; ORG         $A2D40                    ; Replaces A2D40 (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x25                                   ; Repeat the line above 25 times.


; ORG         $A31E2                    ; Replaces A31E2 (There is space enough to replace all the code).

                                        ; Block of code that activates the enemy group caller for the boss area.
  MOVE.L      #$1F1800, ($A2, A0)       ; Stores 1F2000 inside ($A2 + A0), first enemy group address.
  MOVE.W      #$FFFF, ($5C, A0)         ; Stores FFFF inside ($5C, A0), -1 as spawn delay.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x7                                    ; Repeat the line above 7 times.


; ORG         $A3202                    ; Replaces A3202 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A320E                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x26                                   ; Repeat the line above 26 times.


; This module has routines to handle how the Stage 3 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A26DE: Executes Custom Enemy Group 1
; 0A26F0: Executes Custom Lock Group 1
; 0A2700: Executes Custom Enemy Group 2
; 0A2710: Executes Custom Lock Group 2
; 0A2720: Delays Exiting Area 1
; 0A2730: Handles Exiting Area 1
; 0A2740: Executes Inactive Custom Group 1
; 0A2CEE: Executes Custom Enemy Group 3
; 0A2D00: Executes Custom Lock Group 3
; 0A2D10: Executes Custom Enemy Group 4
; 0A2D20: Executes Custom Lock Group 4
; 0A2D30: Delays Exiting Area 2
; 0A2D40: Handles Exiting Area 2
; 0A31E2: Sets Area 3 Starting Data
; 0A3202: Executes Boss Helper Enemy Groups