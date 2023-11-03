*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 2 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles all the custom
*               enemy groups for the 2th stage.
*----------------------------------------------------------------------------------------------

; ORG         $A1E56                    ; Replaces A1E56 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1E66                    ; Replaces A1E66 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1E76                    ; Replaces A1E76 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1E86                    ; Replaces A1E86 (There is space enough to replace all the code).

                                        ; Block of code that delays exiting the area.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.


; ORG         $A1E96                    ; Replaces A1E96 (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.  
  JSR         $143460                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A1EA6                    ; Replaces A1EA6 (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x47                                   ; Repeat the line above 47 times.


; ORG         $A2194                    ; Replaces A2194 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  MOVE.W      #$6, ($11A4, A5)          ; Stores 6 inside ($11A4 + A5), all barrels spawned flag.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.


; ORG         $A21A4                    ; Replaces A21A4 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x5                                    ; Repeat the line above 5 times.


; ORG         $A21B4                    ; Replaces A21B4 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A21C0                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.



; This module has routines to handle how the Stage 2 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A1E56: Executes Custom Enemy Group 1
; 0A1E66: Executes Custom Lock Group 1
; 0A1E76: Executes Custom Lock Group 2
; 0A1E86: Delays Exiting Area 1
; 0A1E96: Handles Exiting Area 1
; 0A1EA6: Empty Group
; 0A2194: Executes Custom Enemy Group 2
; 0A21A4: Executes Custom Lock Group 3
; 0A21B4: Executes Boss Helper Enemy Groups