*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 6 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles all the custom
*               enemy groups for the 6th stage.
*----------------------------------------------------------------------------------------------

; ORG         $A3BEC                    ; Replaces A3BEC (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x09                                   ; Repeat the line above 9 times.


; ORG         $A3C06                    ; Replaces A3C06 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x25                                   ; Repeat the line above 25 times.


; ORG         $A3C62                    ; Replaces A3C62 (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  JSR         $143400                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x14                                   ; Repeat the line above 14 times.


; ORG         $A3C84                    ; Replaces A3C84 (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x19                                   ; Repeat the line above 19 times.


; ORG         $A4302                    ; Replaces A4302 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x03                                   ; Repeat the line above 3 times.


; ORG         $A430E                    ; Replaces A430E (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x29                                   ; Repeat the line above 29 times.


; ORG         $A4350                    ; Replaces A4350 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A435C                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x9                                    ; Repeat the line above 9 times.


; This module has routines to handle how the Stage 6 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A3BEC: Executes Custom Enemy Group 1
; 0A3C06: Executes Custom Lock Group 1
; 0A3C62: Handles Exiting Area 1
; 0A3C84: Executes Inactive Custom Group 1
; 0A4302: Executes Custom Enemy Group 2
; 0A430E: Executes Custom Lock Group 2
; 0A4350: Executes Boss Helper Enemy Groups