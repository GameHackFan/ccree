*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Stage Script Util
* Written by:   GameHackFan
* Date:         
* Description:  It has routines that handles the new stage scripting
*               functionality.
*----------------------------------------------------------------------------------------------

; ORG         $143000

                                        ; Block of code that dispatches the spawn of an object.
  MOVE.L      ($A2, A0), A2             ; Stores ($A2 + A0) inside A2, the object to spawn address.
  MOVE.W      (A2), D0                  ; Stores (A2) inside D0, the code to execute offset.
  JMP         (PC, D0.W)                ; Jumps to the code that handles the object to spawn.


; ORG         $143020

                                        ; Block of code that spawns enemies (trigger spawn).
  MOVE.W      ($2, A2), D0              ; Stores ($2 + A2) inside D0, the enemy trigger spawn.
  CMP.W       ($699E, A5), D0           ; Compares ($699E + A5) and D0, the camera position. 
  BGT         $143040                   ; If D0 is bigger, go to the RTS line of code.
  JSR         $3676.L                   ; Calls the code that handles an empty space for the enemy to be spawned.
  BEQ         $143042                   ; If it is 0, go to the 2nd block of code.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (trigger spawn, etc).
  ADDQ.B      #$1, ($A0, A0)            ; Code from the original game.
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted, activates the enemy.
  JSR         $A8128                    ; Calls the code that sets the enemy data in memory.
  RTS                                   ; Returns back to the routine that called this code.
                                        ; Block of code that ignore spawning the enemy.
  LEA         ($18, A2), A2             ; Stores ($18 + A2) inside A2, goes to the next object to spawn.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143060

                                        ; Block of code that spawns enemies (spawn delay).
  TST.W       ($5C, A0)                 ; Compares 0 and ($5C + A0), the delay spawn, negative value to grab next spawn delay.
  BLT         $143086                   ; If it is less than 0, go to the line before the RTS line.
  SUBQ.W      #$1, ($5C, A0)            ; Subtracts 1 from ($5C + A0), the delay spawn.
  BGT         $14308C                   ; If the result is greater than 0, go to the RTS line.
  ADDQ.W      #$1, ($5C, A0)            ; Add 1 to ($5C + A0), to ensure it will spawn at some point.
  JSR         $3676.L                   ; Calls the code that handles an empty space for the enemy to be spawned.
  BEQ         $14308C                   ; If it is 0, go to the RTS line.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (spawn delay, etc).
  ADDQ.B      #$1, ($A0, A0)            ; Code from the original game.
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted, activates the enemy.
  JSR         $A8128                    ; Calls the code that sets the enemy data in memory.
  MOVE.W      ($2, A2), ($5C, A0)       ; Stores ($2 + A2) inside ($5C + A0), the next object spawn delay.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1430A0

                                        ; Block of code that spawns objects (trigger spawn).
  MOVE.W      ($2, A2), D0              ; Stores ($2 + A2) inside D0, the object trigger spawn.
  CMP.W       ($699E, A5), D0           ; Compares ($699E + A5) and D0, the camera position. 
  BGT         $1430BA                   ; If D0 is bigger, go to the RTS line of code.
  JSR         $36AA.L                   ; Calls the code that handles an empty space for the object to be spawned.
  BEQ         $1430BC                   ; If it is 0, go to the 2nd block of code.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (trigger spawn, etc).
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted, activates the object.
  BSR         $143490                   ; Calls the code that sets the object data in memory.
  RTS                                   ; Returns back to the routine that called this code.
                                        ; Block of code that ignore spawning the object.
  LEA         ($18, A2), A2             ; Stores ($18 + A2) inside A2, goes to the next object to spawn.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1430E0

                                        ; Block of code that spawns objects (spawn delay).
  TST.W       ($5C, A0)                 ; Compares 0 and ($5C + A0), the delay spawn, negative value to grab next spawn delay.
  BLT         $143100                   ; If it is less than 0, go to the line before the RTS line.
  SUBQ.W      #$1, ($5C, A0)            ; Subtracts 1 from ($5C + A0), the delay spawn.
  BGT         $143106                   ; If the result is greater than 0, go to the RTS line.
  ADDQ.W      #$1, ($5C, A0)            ; Add 1 to ($5C + A0), to ensure it will spawn at some point.
  JSR         $36AA.L                   ; Calls the code that handles an empty space for the object to be spawned.
  BEQ         $143106                   ; If it is 0, go to the RTS line.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (spawn delay, etc).
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted.
  BSR         $143490                   ; Calls the code that sets the object data in memory.
  MOVE.W      ($2, A2), ($5C, A0)       ; Stores ($2 + A2) inside ($5C + A0), the next object spawn delay.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143120

                                        ; Block of code that spawns robots (trigger spawn).
  MOVE.W      ($2, A2), D0              ; Stores ($2 + A2) inside D0, the object trigger spawn.
  CMP.W       ($699E, A5), D0           ; Compares ($699E + A5) and D0, the camera position. 
  BGT         $14313E                   ; If D0 is bigger, go to the RTS line of code.
  JSR         $36AA.L                   ; Calls the code that handles an empty space for the object to be spawned.
  BEQ         $143140                   ; If it is 0, go to the 2nd block of code.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (trigger spawn, etc).
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted, activates the robot.
  BSR         $143490                   ; Calls the code that sets the object data in memory.
  BSR         $1434E0                   ; Calls the code that sets the robot data in memory.
  RTS                                   ; Returns back to the routine that called this code.
                                        ; Block of code that ignore spawning the robot.
  LEA         ($18, A2), A2             ; Stores ($18 + A2) inside A2, goes to the next object to spawn.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143160

                                        ; Block of code that spawns robots (spawn delay).
  TST.W       ($5C, A0)                 ; Compares 0 and ($5C + A0), the delay spawn, negative value to grab next spawn delay.
  BLT         $143184                   ; If it is less than 0, go to the line before the RTS line.
  SUBQ.W      #$1, ($5C, A0)            ; Subtracts 1 from ($5C + A0), the delay spawn.
  BGT         $14318A                   ; If the result is greater than 0, go to the RTS line.
  ADDQ.W      #$1, ($5C, A0)            ; Add 1 to ($5C + A0), to ensure it will spawn at some point.
  JSR         $36AA.L                   ; Calls the code that handles an empty space for the object to be spawned.
  BEQ         $14318A                   ; If it is 0, go to the RTS line.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (spawn delay, etc).
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted, activates the robot.
  BSR         $143490                   ; Calls the code that sets the object data in memory.
  BSR         $1434E0                   ; Calls the code that sets the robot data in memory.
  MOVE.W      ($2, A2), ($5C, A0)       ; Stores ($2 + A2) inside ($5C + A0), the next object spawn delay.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1431A0

                                        ; Block of code that spawns falling drumcan (trigger spawn).
  MOVE.W      ($2, A2), D0              ; Stores ($2 + A2) inside D0, the enemy trigger spawn.
  CMP.W       ($699E, A5), D0           ; Compares ($699E + A5) and D0, the camera position. 
  BGT         $1431BA                   ; If D0 is bigger, go to the RTS line of code.
  JSR         $3676.L                   ; Calls the code that handles an empty space for the enemy to be spawned.
  BEQ         $1431BC                   ; If it is 0, go to the 2nd block of code.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (trigger spawn, etc).
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted, activates the drumcan.
  BSR         $143530                   ; Calls the code that sets the falling drumcan data in memory.
  RTS                                   ; Returns back to the routine that called this code.
                                        ; Block of code that ignore spawning the enemy.
  LEA         ($18, A2), A2             ; Stores ($18 + A2) inside A2, goes to the next object to spawn.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1431E0

                                        ; Block of code that spawns falling drumcan (spawn delay).
  TST.W       ($5C, A0)                 ; Compares 0 and ($5C + A0), the delay spawn, negative value to grab next spawn delay.
  BLT         $143200                   ; If it is less than 0, go to the line before the RTS line.
  SUBQ.W      #$1, ($5C, A0)            ; Subtracts 1 from ($5C + A0), the delay spawn.
  BGT         $143206                   ; If the result is greater than 0, go to the RTS line.
  ADDQ.W      #$1, ($5C, A0)            ; Add 1 to ($5C + A0), to ensure it will spawn at some point.
  JSR         $3676.L                   ; Calls the code that handles an empty space for the object to be spawned.
  BEQ         $143206                   ; If it is 0, go to the RTS line.
  ADDQ.L      #$4, A2                   ; Adds 4 to A2, jumps the extra data bytes (spawn delay, etc).
  ADDQ.B      #$1, (A1)                 ; Code from the original game readjusted, activates the drumcan.
  BSR         $143530                   ; Calls the code that sets the falling drumcan data in memory.
  MOVE.W      ($2, A2), ($5C, A0)       ; Stores ($2 + A2) inside ($5C + A0), the next object spawn delay.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143300

                                        ; Block of code that handles going to the next enemy group.
  MOVE.W      ($2, A2), D0              ; Stores ($2 + A2) inside D0, the object trigger spawn.
  CMP.W       ($699E, A5), D0           ; Compares ($699E + A5) and D0, the camera position.
  BGT         $14332C                   ; If D0 is bigger or equals, go to the RTS line.
  MOVE.W      ($4, A2), D0              ; Stores ($4 + A2) inside D0, enemies alive tolerance.
  CMP.B       ($AC2, A5), D0            ; Compares ($AC2 + A5) and D0, current enemies alive.
  BLT         $14332C                   ; If D0 is smaller, go to the RTS line.
  MOVE.W      ($6, A2), ($4, A0)        ; Stores ($6 + A2) inside ($4 + A0), next enemy group ID.
  MOVE.L      ($8, A2), ($A2, A0)       ; Stores ($8 + A2) inside ($A2 + A0), next enemy group address.
  MOVE.B      ($0C, A2), ($7833, A5)    ; Stores ($C + A2) inside ($7833 + A5), release lock flag.
  MOVE.W      #$FFFF, ($5C, A0)         ; Stores FFFF inside ($5C, A0), -1 as spawn delay.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143360

                                        ; Block of code that removes all objects from an area.
  MOVE.L      A2, A1                    ; Stores A2 inside A1, address with the list of regions to clean.
  MOVE.W      (A1)+, D0                 ; Stores (A1)+ inside D0, the code offset.
  MOVE.W      (A1)+, D0                 ; Stores (A1)+ inside D0, the object address to clean.
  BEQ         $14336E                   ; If it is 0, stop cleaning, ignore the 2 lines below.
  CLR.B       (A5, D0.W)                ; Clears (A5, D0.W).
  BRA         $143364                   ; Jumps back to the 3rd line of code.
  LEA         ($18, A2), A2             ; Stores ($18 + A2) inside A2, the next object to spawn.
  MOVE.L      A2, ($A2, A0)             ; Stores A2 inside ($A2 + A0), sets the next object to spawn.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1433A0

                                        ; Block of code that adds position restriction to lock spawning.
  MOVE.W      ($2, A2), D0              ; Stores ($2 + A2) inside D0, the object trigger spawn.
  CMP.W       ($699E, A5), D0           ; Compares ($699E + A5) and D0, the camera position.
  BGT         $1433B2                   ; If D0 is bigger, go to the RTS line.
  LEA         ($18, A2), A2             ; Stores ($18 + A2) inside A2, the next object to spawn.
  MOVE.L      A2, ($A2, A0)             ; Stores A2 inside ($A2 + A0), sets the next object to spawn.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1433E0

                                        ; Block of code that calls a stage custom code.
  JSR         ($2, A2)                  ; Calls the custom stage code.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143400

                                        ; Block of code that handles exiting the area.
  TST.W       ($AC4, A5)                ; Compares 0 and ($AC4 + A5), part of the next enemy address.
  BLT         $143428                   ; If it is less than 0, go to the 2nd block of code.
  CLR.L       ($AC4, A5)                ; Clears ($AC4 + A5), the next enemy address.
  SUBQ.W      #$1, ($5C, A0)            ; Subtracts 1 from ($5C + A0), the delay timer.
  BNE         $143426                   ; If it the result is not 0, go to the RTS line.
  ADDQ.W      #$1, ($5C, A0)            ; Adds 1 to ($5C + A0), the delay timer.
  JSR         $4474.L                   ; Code from the original game.
  BEQ         $143426                   ; If the result is 0, go to the RTS line.
  ADDQ.W      #$2, ($4, A0)             ; Adds 2 to ($4 + A0), go to the next enemy group.
  MOVE.B      #$1, ($7833, A5)          ; Stores 1 inside ($7833 + A5), release the lock.
  RTS                                   ; Returns back to the routine that called this code.
  CLR.L       ($AC4, A5)                ; Clears ($AC4 + A5), the next enemy address.
  MOVE.W      #$B4, ($5C, A0)           ; Stores B4 inside ($5C + A0), 3 seconds of time delay.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143460

                                        ; Block of code that handles exiting the area.
  SUBQ.W      #$1, ($5C, A0)            ; Subtracts 1 from ($5C + A0), the delay spawn.
  BGT         $143476                   ; Code from the original game.
  ADDQ.W      #$2, ($4, A0)             ; Code from the original game readjusted.
  JSR         $4474.L                   ; Code from the original game.
  BEQ         $143478                   ; If the result is 0, go to the RTS line.
  JMP         $7222.L                   ; Code from the original game readjusted.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143490

                                        ; Block of code that sets object to spawn data.
  MOVE.W      (A2)+, ($A, A1)           ; Stores (A2)+ inside ($A + A1), the position X.
  MOVE.W      (A2)+, ($E, A1)           ; Stores (A2)+ inside ($E + A1), the elevation.
  MOVE.W      (A2)+, ($12, A1)          ; Stores (A2)+ inside ($12 + A1), the position Y.
  MOVE.L      (A2)+, ($34, A1)          ; Stores (A2)+ inside ($34 + A1), the object pointer.
  MOVE.L      (A2)+, ($38, A1)          ; Stores (A2)+ inside ($38 + A1), the object pose.
  MOVE.W      (A2)+, ($16, A1)          ; Stores (A2)+ inside ($16 + A1), the object HUD data.
  MOVE.W      (A2)+, ($5C, A1)          ; Stores (A2)+ inside ($5C + A1), the object inactive timer.
  MOVE.B      (A2)+, ($5A, A1)          ; Stores (A2)+ inside ($5A + A1), the object direction and pallete.
  MOVE.B      (A2)+, ($98, A1)          ; Stores (A2)+ inside ($98 + A1), many things.
  MOVE.L      A2, ($A2, A0)             ; Stores A2 inside ($A2 + A0), the next object data.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1434E0

                                        ; Block of code that sets robot to spawn data.
  CLR.L       ($A0, A1)                 ; Clears ($A0 + A1), necessary so robots work properly.
  CLR.L       ($A4, A1)                 ; Clears ($A4 + A1), necessary so robots work properly.
  CLR.L       ($A8, A1)                 ; Clears ($A8 + A1), necessary so robots work properly.
  CLR.L       ($AC, A1)                 ; Clears ($AC + A1), necessary so robots work properly.
  CLR.L       ($B0, A1)                 ; Clears ($B0 + A1), necessary so robots work properly.
  CLR.L       ($B4, A1)                 ; Clears ($B4 + A1), necessary so robots work properly.
  CLR.L       ($B8, A1)                 ; Clears ($B8 + A1), necessary so robots work properly.
  CLR.L       ($BC, A1)                 ; Clears ($BC + A1), necessary so robots work properly.
  MOVE.W      #$48, ($96, A1)           ; Stores 48 inside ($96 + A1), robot is not being used flag.
  MOVE.W      #$60, ($3C, A1)           ; Stores 60 inside ($3C + A1), robot HP.
  MOVE.W      #$60, ($3E, A1)           ; Stores 60 inside ($3E + A1), robot HP.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143530

                                        ; Block of code that sets falling barrel to spawn data.
  MOVE.W      (A2)+, ($A, A1)           ; Stores (A2)+ inside ($A + A1), the position X.
  MOVE.W      (A2)+, ($E, A1)           ; Stores (A2)+ inside ($E + A1), the elevation.
  MOVE.W      (A2)+, ($12, A1)          ; Stores (A2)+ inside ($12 + A1), the position Y.
  MOVE.L      (A2)+, ($34, A1)          ; Stores (A2)+ inside ($34 + A1), the object pointer.
  MOVE.L      (A2)+, ($38, A1)          ; Stores (A2)+ inside ($38 + A1), the object pose.
  MOVE.W      (A2)+, ($16, A1)          ; Stores (A2)+ inside ($16 + A1), the object HUD data.
  MOVE.W      (A2)+, ($5E, A1)          ; Stores (A2)+ inside ($5E + A1), the object inactive timer.
  MOVE.W      (A2)+, ($40, A1)          ; Stores (A2)+ inside ($40 + A1), the direction and speed.
  MOVE.W      #$8000, ($42, A1)         ; Stores 8000 inside ($42 + A1), falling barrel weight?.
  MOVE.W      #$10, ($86, A1)           ; Stores 10 inside ($86 + A1), the damage it will deal.
  MOVE.W      #$2, ($3C, A1)            ; Stores 2 inside ($3C + A1), falling barrel HP.
  MOVE.W      #$2, ($3E, A1)            ; Stores 2 inside ($3E + A1), falling barrel lifebar size.
  CLR.W       ($96, A1)                 ; Clears ($96 + A1), necessary.
  CLR.W       ($68, A1)                 ; Clears ($68 + A1), necessary.
  CLR.B       ($78, A1)                 ; Clears ($78 + A1), necessary.
  MOVE.L      A2, ($A2, A0)             ; Stores A2 inside ($A2 + A0), the next object data.
  MOVE.W      ($699E,A5), D0            ; Stores ($699E + A5) inside D0, the camera position.
  SUB.W       #$20, D0                  ; Subtracts 20 from D0, left side out of screen limit.
  CMP.W       ($A, A1), D0              ; Compares ($A + A1) and D0, object position and limit position.
  BLS         $14358C                   ; If limit position is smaller or equals, ignore the 2 lines below.
  MOVE.W      D0, ($A, A1)              ; Stores D0 inside ($A + A1), the inside limits object position.
  RTS                                   ; Returns back to the routine that called this code.
  MOVE.W      ($699E,A5), D0            ; Stores ($699E + A5) inside D0, the camera position.
  ADD.W       #$1A0, D0                 ; Adds 1A0 to D0, right side out of screen limit.
  CMP.W       ($A, A1), D0              ; Compares ($A + A1) and D0, object position and limit position.
  BCC         $14359E                   ; If limit position is bigger or equals, ignore the line below.
  MOVE.W      D0, ($A, A1)              ; Stores D0 inside ($A + A1), the inside limits object position.
  RTS                                   ; Returns back to the routine that called this code.


; This module has routines that handles the new stage scripting, it
; offers features like routines to handle enemies / objects spawning,
; exiting the area, remove default barrels, add position restriction,
; moving to next enemy group, execute custom stage code, etc.
;
; 143000: Object Spawn Dispatcher
; 143020: Enemy Spawn Handler (Default)
; 143060: Enemy Spawn Handler (Lock)
; 1430A0: Object Spawn Handler (Default)
; 1430E0: Object Spawn Handler (Lock)
; 143120: Robot Spawn Handler (Default)
; 143160: Robot Spawn Handler (Lock)
; 1431A0: Falling Drumcan Spawn Handler (Default)
; 1431E0: Falling Drumcan Spawn Handler (Lock)
; 143300: Enemy Group End Handler
; 143360: Deactivates Objects From List
; 1433A0: Handles Position Restriction To Lock Spawning
; 1433E0: Stage Script Custom Code Caller
; 143400: Handles Exiting Area
; 143460: Handles Exiting Area
; 143490: Sets Object To Spawn Data In Memory
; 1434E0: Sets Robot To Spawn Data In Memory
; 143530: Sets Falling Drumcan To Spawn Data In Memory