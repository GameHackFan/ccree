*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage 4 Script Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles all the custom
*               enemy groups for the 4th stage.
*----------------------------------------------------------------------------------------------

; ORG         $A331C                    ; Replaces A331C (There is space enough to replace all the code).

                                        ; Block of code that sets the enemy group address.
  MOVE.L      #$1F2000, ($A2, A0)       ; Stores 1F2000 inside ($A2 + A0), first enemy group address.
  CLR.B       ($6514, A5)               ; Clears ($6514 + A5), deactivate the 1st barrel.
  CLR.B       ($65D4, A5)               ; Clears ($65D4 + A5), deactivate the 1st barrel.
  CLR.B       ($6694, A5)               ; Clears ($6694 + A5), deactivate the 1st barrel.
  CLR.B       ($6754, A5)               ; Clears ($6754 + A5), deactivate the 1st barrel.
  CLR.B       ($6814, A5)               ; Clears ($6814 + A5), deactivate the 1st barrel.
  CLR.B       ($68D4, A5)               ; Clears ($68D4 + A5), deactivate the 1st barrel.
  RTS                                   ; Returns back to the routine that called this code.
  x14                                   ; Repeat the line above 14 times.



; ORG         $A3356                    ; Replaces A3356 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x6                                    ; Repeat the line above 6 times.


; ORG         $A336A                    ; Replaces A336A (There is space enough to replace all the code).

                                        ; Block of code that delays exiting the area.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x4                                    ; Repeat the line above 4 times.


; ORG         $A337E                    ; Replaces A337E (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  JSR         $143460                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x02                                   ; Repeat the line above 02 times.


; ORG         $A338A                    ; Replaces A338A (There is space enough to replace all the code).

                                        ; Block of code that deactivates the enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x04                                   ; Repeat the line above 4 times.


; ORG         $A33D0                    ; Replaces A33D0 (There is space enough to replace all the code).

                                        ; Block of code that sets the enemy group address.
  MOVE.L      #$1F2400, ($A2, A0)       ; Stores 1F2400 inside ($A2 + A0), first enemy group address.
  MOVE.W      #$FFFF, ($5C, A0)         ; Stores FFFF inside ($5C + A0), time delay set to -1.
  RTS                                   ; Returns back to the routine that called this code.
  x22                                   ; Repeat the line above 22 times.


; ORG         $A3418                    ; Replaces A3418 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $A3422                    ; Replaces A3422 (There is space enough to replace all the code).

                                        ; Block of code that delays exiting the area.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $A342E                    ; Replaces A342E (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  CMP.W       #$1, ($5C, A0)            ; Compares 1 and ($5C + A0), the time delay.
  BGT         $A343C                    ; If it is greater than 1, ignore the line below
  MOVE.B      #$1, ($7833, A5)          ; Stores 1 inside ($7833 + A5), release the lock.
  JSR         $143460                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x04                                   ; Repeat the line above 4 times.


; ORG         $A3464                    ; Replaces A3464 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  MOVE.L      #$1F2800, ($A2, A0)       ; Stores 1F2000 inside ($A2 + A0), first enemy group address.
  MOVE.W      #$2, ($4, A0)             ; Stores 2 inside ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x07                                   ; Repeat the line above 7 times.


; ORG         $A3480                    ; Replaces A3480 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x05                                   ; Repeat the line above 5 times.


; ORG         $A3490                    ; Replaces A3490 (There is space enough to replace all the code).

                                        ; Block of code that delays exiting the area.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  MOVE.W      #$6, ($4, A0)             ; Stores 6 inside ($4 + A0), go to the next enemy group.
  RTS                                   ; Returns back to the routine that called this code.
  x2                                    ; Repeat the line above 2 times.


; ORG         $A34A0                    ; Replaces A34A0 (There is space enough to replace all the code).

                                        ; Block of code that handles exiting the area.
  CMP.W       #$1, ($5C, A0)            ; Compares 1 and ($5C + A0), the time delay.
  BGT         $A34AE                    ; If it is greater than 1, ignore the line below
  MOVE.B      #$1, ($7833, A5)          ; Stores 1 inside ($7833 + A5), release the lock.
  JSR         $143460                   ; Calls the code that handles exiting the area.
  RTS                                   ; Returns back to the routine that called this code.
  x04                                   ; Repeat the line above 4 times.


; ORG         $A34B8                    ; Replaces A34B8 (There is space enough to replace all the code).

                                        ; Block of code that calls a custom object spawn dispatcher.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), force enemies to die flag.
  BNE         $A34C4                    ; If it is not 0, enemies should all die, go to RTS line.
  JSR         $143000                   ; Calls the code that dispatches object spawn.
  RTS                                   ; Returns back to the routine that called this code.
  x09                                   ; Repeat the line above 9 times.


; ORG         $A34D0                    ; Replaces A34D0 (There is space enough to replace all the code).

                                        ; Block of code that activates the enemy group caller for the boss area.
  CMP.B       #$3, ($28D0, A5)          ; Compares 3 and ($28D0 + A5), stage 4 boss area.
  BNE         $A3506                    ; If it is not 3, go to the RTS line.
  MOVE.B      #$1, ($A22, A5)           ; Stores 1 inside ($A22 + A5), activate enemy group caller.
  MOVE.B      #$1, ($A38, A5)           ; Stores 1 inside ($A38 + A5), enemy group caller data.
  MOVE.W      #$8, ($A26, A5)           ; Stores 8 inside ($A26 + A5), the enemy group offset.
  MOVE.W      #$E, ($A5A, A5)           ; Stores E inside ($A56 + A5), important value.
  MOVE.L      #$A15A8, ($A56, A5)       ; Stores A15A8 inside ($A56 + A5), important address.
  MOVE.L      #$1F2C00, ($AC4, A5)      ; Stores 1F2C00 inside ($AC4 + A5), object list address.
  MOVE.W      #$FFFF, ($A7E, A5)        ; Stores FFFF inside ($A7E + A5), time to spawn delay as -1.
  RTS                                   ; Returns back to the routine that called this code.


; This module has routines to handle how the Stage 4 enemy groups
; and area will behave, modifying it in a way that it is easier
; to manipulate with a Level Editor and Seed Randomizer.
; 
; 0A331C: Sets Area 1 Starting Data
; 0A3356: Executes Custom Lock Group 1
; 0A336A: Delays Exiting Area 1
; 0A337E: Handles Exiting Area 1
; 0A338A: Executes Inactive Custom Group 1
; 0A33D0: Sets Area 2 Starting Data
; 0A3418: Executes Custom Lock Group 2
; 0A3422: Delays Exiting Area 2
; 0A342E: Handles Exiting Area 2
; 0A3464: Sets Area 3 Starting Data
; 0A3480: Executes Custom Lock Group 3
; 0A3490: Delays Exiting Area 3
; 0A34A0: Handles Exiting Area 3
; 0A34B8: Executes Boss Helper Enemy Groups
; 0A34D0: Activates Boss Area Custom Enemy Group