*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 7 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles all the custom
*               enemy groups for the 7th stage.
*----------------------------------------------------------------------------------------------

; ORG         $A57D0                    ; Replaces A57D0 (There is space enough to replace all the code).

                                        ; Block of code that sets the 1st enemy group address.
  MOVE.L      #$1F8000, ($A2, A0)       ; Stores 1F8000 inside ($A2 + A0), first enemy group address.
  MOVE.W      #$2, ($4, A0)             ; Stores 2 inside ($4 + A0), go to the next enemy group.
  MOVE.W      #$16, ($AE2, A5)          ; Stores 16 inside ($AE2 + A5), disables ninjas spawning.
  RTS                                   ; Returns back to the routine that called this code.
  x07                                   ; Repeat the line above 7 times.



; ORG         $A57F4                    ; Replaces A57F4 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x170                                  ; Repeat the line above x170 times.


; ORG         $A5950                    ; Replaces A5950 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x3                                    ; Repeat the line above 3 times.


; ORG         $A595E                    ; Replaces A595E (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x16                                   ; Repeat the line above 16 times.


; ORG         $A5986                    ; Replaces A5986 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x55                                   ; Repeat the line above 55 times.


; ORG         $A59FC                    ; Replaces A59FC (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x10                                   ; Repeat the line above 10 times.


; ORG         $A5A18                    ; Replaces A5A18 (There is space enough to replace all the code).

                                        ; Block of code that delays exiting the area.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $A5A2E                    ; Replaces A5A2E (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  JSR         $143460                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x11                                   ; Repeat the line above 11 times.


; ORG         $A5A4C                    ; Replaces A5A4C (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x45                                   ; Repeat the line above 45 times.


; ORG         $A4DA6                    ; Replaces A4DA6 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x4                                    ; Repeat the line above 4 times.


; ORG         $A4DB4                    ; Replaces A4DB4 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x20                                   ; Repeat the line above 20 times.


; ORG         $A4DE4                    ; Replaces A4DE4 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x20                                   ; Repeat the line above 20 times.


; ORG         $A4E20                    ; Replaces A4E20 (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  JSR         $143400                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x26                                   ; Repeat the line above 26 times.


; ORG         $A4E7A                    ; Replaces A4E7A (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x8                                    ; Repeat the line above 8 times.


; ORG         $A4E8A                    ; Replaces A4E8A (There is space enough to replace all the code).

                                        ; Block of code that activates the enemy group caller for the boss area.
  CMP.B       #$3, ($28D0, A5)          ; Compares 3 and ($28D0 + A5), stage 7 boss area.
  BNE         $A4EC6                    ; If it is not 3, go to the RTS line.
  MOVE.B      #$1, ($A22, A5)           ; Stores 1 inside ($A22 + A5), activate enemy group caller.
  MOVE.B      #$1, ($A38, A5)           ; Stores 1 inside ($A38 + A5), enemy group caller data.
  MOVE.W      #$C, ($A26, A5)           ; Stores C inside ($A26 + A5), the enemy group offset.
  MOVE.W      #$22, ($A5A, A5)          ; Stores 22 inside ($A56 + A5), important value.
  MOVE.L      #$A15A8, ($A56, A5)       ; Stores A15A8 inside ($A56 + A5), important address.
  MOVE.L      #$1F2C00, ($AC4, A5)      ; Stores 1F2C00 inside ($AC4 + A5), object list address.
  MOVE.W      #$FFFF, ($A7E, A5)        ; Stores FFFF inside ($A7E + A5), time to spawn delay as -1.
  MOVE.W      #$02, ($A24, A5)          ; Stores 2 inside ($A24 + A5), enemy group caller data.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $A4EDE                    ; Replaces A4EDE (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A4EEA                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  x20                                   ; Repeat the line above 20 times.


; This module has routines to handle how the Stage 7 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A57D0: Sets Area Starting Data
; 0A57F4: Executes Custom Enemy Group 1
; 0A5950: Executes Custom Lock Group 1
; 0A595E: Executes Custom Enemy Group 2
; 0A5986: Executes Custom Lock Group 2
; 0A59FC: Executes Custom Lock Group 3
; 0A5A18: Delays Exiting Area 1
; 0A5A2E: Handles Exiting Area 1
; 0A5A4C: Executes Inactive Custom Group 1
; 0A4DA6: Executes Custom Enemy Group 3
; 0A4DB4: Executes Custom Lock Group 4
; 0A4DE4: Executes Custom Lock Group 5
; 0A4E20: Handles Exiting Area 2
; 0A4E7A: Executes Inactive Custom Group 2
; 0A4E8A: Activates Boss Area Custom Enemy Group
; 0A4EDE: Executes Boss Helper Enemy Groups