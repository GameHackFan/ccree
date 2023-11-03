*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Captre Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has a routine that randomizes a value.
*----------------------------------------------------------------------------------------------

; ORG         $141760

                                        ; Block of code that randomizes a value inside D5.
  CLR.L       D6                        ; Clears D6.
  TST.W       ($7F1C, A5)               ; Compares 0 and ($7F1C + A5), amount of times randomized.
  BEQ         $14176E                   ; If it is 0, change the seed ignore the 2 lines below.
  MOVE.W      ($7F1E, A5), D6           ; Stores ($7F1E + A5) inside D6, current seed.
  BNE         $141776                   ; If it is not 0, ignore the 2 lines below.
  MOVE.W      ($2810, A5), D6           ; Stores ($2810 + A5) inside D6, a value used as seed by the game.
  ADD.W       ($119A, A5), D6           ; Adds ($119A + A5) to D6, stage frames passed.
  ADD.W       #$FC15, D6                ; Adds FC15 to D6, part of the randomizer calculation.
  MULU.W      #$2AB, D6                 ; Multiplies D6 by 2AB, part of the randomizer calculation.
  MOVE.L      D6, D1                    ; Stores D6 inside D1, part of the randomizer calculation.
  LSR.L       #$8, D1                   ; Shifts right D1 bits by 8, part of the randomizer calculation.
  LSR.L       #$8, D1                   ; Shifts right D1 bits by 8, part of the randomizer calculation.
  EOR.L       D1, D6                    ; D6 exclusive or D1, part of the randomizer calculation.
  ADDQ.W      #$1, ($7F1C, A5)          ; Adds 1 to ($7F1C + A5), the amount of times it randomized.
  AND.L       #$00FFFF, D6              ; D6 and FFFF, 16 bits randomizer.
  MOVE.W      D6, ($7F1E, A5)           ; Stores D5 inside ($7F1E + A5), the new seed.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $1417B0

                                        ; Block of code that randomizes 1 to 16 times a value inside D6.
  MOVE.W      ($2810, A5), D0           ; Stores ($2810 + A5) inside D0, a value used as seed by the game.
  ADD.W       ($119A, A5), D0           ; Adds ($119A + A5) to D0, stage frames passed.
  AND.W       #$F, D0                   ; D0 and F, values from 0 to F, 1 to 16 iterations.
  BSR         $141760                   ; Calls the code that randomizes a value.
  DBRA        D0, $1417BC               ; Loops back to the code that randomizes a value, line above.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $14157C

                                        ; Block of code that randomizes a character for the current player.
  TST.B       (A5, D0.W)                ; Compares 0 and (A5 + D0.W), the player randomizer flag.
  BEQ         $14159A                   ; If it is 0, go to the RTS line.
  BSR         $1417B0                   ; Calls the code that randomizes 1 to 16 times a value inside D6.
  AND.W       #$3, D6                   ; D6 and 3, there are only 4 playable characters.
  MOVE.B      D6, ($A0, A0)             ; Stores D6 inside ($A0 + A0), the randomized character ID.
  BSR         $1417B0                   ; Calls the code that randomizes 1 to 16 times a value inside D6.
  AND.W       #$7, D6                   ; D6 and 7, there are only 8 available colors.
  MOVE.B      D6, ($3A, A0)             ; Stores D6 inside ($3A + A0), the randomized pallete ID.
  RTS                                   ; Returns back to the routine that called this code.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $141530

                                        ; Block of code that removes old randomization.
  RTS                                   ; Returns back to the routine that called this code.
  NOP                                   ; No operation, does nothing.
  x29                                   ; Repeat the line above 20 times.



; This module has routines that improves CAPTRE, which means in case
; of an update to CAPTRE, these changes should be added there and
; removed from the editor.
; 
; 141760: Randomizes a Value In D6
; 1417B0: Randomizes a Value In D6 (1 to 16 Iterations)
; 141582: Fix Character and Color Randomization
; 141530: Removes Old Randomization