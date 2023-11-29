*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Posture Improvement
* Written by:   GameHackFan
* Date:         
* Description:  Adds support or improves the way enemy postures are
*               handled by the game
*----------------------------------------------------------------------------------------------

; ORG         $20D9E                    ; Replaces 20D9E (There is space enough to replace all the code).

                                        ; Block of code adds custom postures (Samson / Organo).
  MOVE.W      ($5C, A0), ($4, A0)       ; Stores ($5C + A0) inside ($4 + A0), the custom posture.
  MOVE.W      ($38, A0), ($6, A0)       ; Stores ($38 + A0) inside ($6 + A0), the custom posture.


; ORG         $252F6                    ; Replaces 252F6 (There is space enough to replace all the code).

                                        ; Block of code adds custom postures (Skip / Sonie).
  CLR.W       ($4, A0)                  ; Code from the original game readjusted.
  MOVE.B      #$40, ($A7, A0)           ; Code from the original.
  MOVE.W      ($38, A0), ($6, A0)       ; Stores ($38 + A0) inside ($6 + A0), the custom posture.
  MOVE.W      ($5C, A0), ($8, A0)       ; Stores ($5C + A0) inside ($8 + A0), the timer as part of the custom posture.
  CMP.W       #$8, ($38, A0)            ; Compares 8 and ($38 + A0), the falling posture.
  BNE         $25318                    ; If it is not 8, ignore the line below.
  BRA         $266BE                    ; Jumps to the line that handles the kniver jumping.
  MOVE.L      #$FFFD8000, ($40, A0)     ; Code from the original.
  TST.B       ($5A, A0)                 ; Code from the original.
  BEQ         $2532A                    ; Code from the original game readjusted.


; ORG         $25332                    ; Replaces 25332 (There is space enough to replace all the code).

                                        ; Block of code that fixes falling posture (Skip / Sonie).
  MOVE.W      ($E, A0), ($60, A0)       ; Stores ($E + A0) inside ($60 + A0), fix falling animation.


; ORG         $29D4A                    ; Replaces 29D4A (There is space enough to replace all the code).

                                        ; Block of code that adds custom postures (Marbin).
  MOVE.W      ($38, A0), ($4, A0)       ; Stores ($38 + A0) inside ($4 + A0), the custom posture.
  MOVE.W      ($5C, A0), ($6, A0)       ; Stores ($5C + A0) inside ($6 + A0), the custom posture.
  JSR         $143700                   ; Calls the code that sets speed and attack position.
  NOP                                   ; No operation, does nothing.


; ORG         $2D220                    ; Replaces 2D220 (There is space enough to replace all the code).

                                        ; Block of code improves default posture spawn range (Musashi).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $35154                    ; Replaces 35154 (There is space enough to replace all the code).

                                        ; Block of code that sets claw posture data (Cyborg).
  MOVE.W      #$0, ($68, A0)            ; Stores 0 inside ($68 + A0), so he will release his claw.
  JSR         $143780                   ; Calls the code that sets speed and attack position.


; ORG         $351BE                    ; Replaces 351BE (There is space enough to replace all the code).

                                        ; Block of code fixes claw posture (Cyborg).
  CMP.W       #$0, A3                   ; Code from the original game.
  BEQ         $351F0                    ; Code from the original game readjusted.
  CMP.B       #$30, ($59, A3)           ; Code from the original game.
  BEQ         $351F0                    ; Code from the original game readjusted.
  TST.W       ($38, A3)                 ; Compares 0 and ($38 + A3), posture ID.
  BNE         $351E8                    ; If it is not 0, jumps to the code that handles next animation.
  TST.W       ($4, A3)                  ; Code from the original game readjusted.


; ORG         $3707C                    ; Replaces 3707C (There is space enough to replace all the code).

                                        ; Block of code that fixes falling posture (Carol / Brenda).
  MOVE.W      #$0, ($60, A0)            ; Stores 0 inside ($60 + A0), to ensure falling posture will work properly.


; ORG         $37138                    ; Replaces 37138 (There is space enough to replace all the code).

                                        ; Block of code improves walking posture spawn range (Carol / Brenda).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $37266                    ; Replaces 37266 (There is space enough to replace all the code).

                                        ; Block of code improves shocking posture spawn range (Carol / Brenda).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $3727C                    ; Replaces 3727C (There is space enough to replace all the code).

                                        ; Block of code fixes item drop posture (Carol / Brenda).
  MOVE.W      ($5C, A0), ($5E, A0)      ; Stores ($5C + A0) inside ($5E + A0), time delay as item drop flag.
  BNE         $3729C                    ; Code from the original game readjusted.


; ORG         $372CC                    ; Replaces 372CC (There is space enough to replace all the code).

                                        ; Block of code that sets shocking posture data (Carol / Brenda).
  JSR         $143740                   ; Calls the code that sets speed and attack position.


; ORG         $37300                    ; Replaces 37300 (There is space enough to replace all the code).

                                        ; Block of code fixes Carol shocking posture.
  CMP.B       ($BE, A0), D0             ; Compares ($BE + A0) and D0, position to attack.


; ORG         $37314                    ; Replaces 37314 (There is space enough to replace all the code).

                                        ; Block of code fixes Carol shocking posture.
  CMP.B       ($BE, A0), D0             ; Compares ($BE + A0) and D0, position to attack.


; ORG         $58D14                    ; Replaces 58D14 (There is space enough to replace all the code).

                                        ; Block of code improves how Dr. T. W. ends stage 4.
  TST.B       ($784B, A5)               ; Compares 0 and ($784B + A5), flag that is active if the area should end.
  BNE         $58DF4                    ; If it is not 0, go to the code that ends the stage.


; ORG         $5BC94                    ; Replaces 5BC94 (There is space enough to replace all the code).

                                        ; Block of code improves default posture spawn range (Wooky).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $61D3E                    ; Replaces 61D3E (There is space enough to replace all the code).

                                        ; Block of code improves default posture spawn range (Eddy).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $65D6A                    ; Replaces 65D6A (There is space enough to replace all the code).

                                        ; Block of code improves default posture spawn range (Dick).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $6C802                    ; Replaces 6C802 (There is space enough to replace all the code).

                                        ; Block of code improves default posture spawn range (Kojiro).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $6CA8E                    ; Replaces 6CA8E (There is space enough to replace all the code).

                                        ; Block of code improves teleport posture spawn range (Kojiro).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $705CC                    ; Replaces 705CC (There is space enough to replace all the code).

                                        ; Block of code improves default posture spawn range (Hanzo).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $7083C                    ; Replaces 7083C (There is space enough to replace all the code).

                                        ; Block of code improves teleport posture spawn range (Hanzo).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $74306                    ; Replaces 74306 (There is space enough to replace all the code).

                                        ; Block of code improves default posture spawn range (Sasuke).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $74576                    ; Replaces 74576 (There is space enough to replace all the code).

                                        ; Block of code improves teleport posture spawn range (Sasuke).
  ADD.W       #$100, D0                 ; Adds 100 from D0, outside screen tolerance.
  SUB.W       ($699E, A5), D0           ; Subtracts ($699E + A5) from D0, camera position.
  CMP.W       #$380, D0                 ; Compares 380 and D0, range to activate the character.


; ORG         $A0D7A                    ; Replaces A0D7A (There is space enough to replace all the code).

                                        ; Block of code increases Falling Drumcan out of screen tolerance.
  SUB.W       #$A0, D0                  ; Subtracts A0 from D0, left side out of screen limit.
  MOVE.W      ($A, A0), D1              ; Code from the original game.
  SUB.W       D0, D1                    ; Code from the original game.
  CMP.W       #$2C0, D1                 ; Compares 2C0 and D1, the position range tolerance.


; ORG         $143700

                                        ; Block of code sets speed and attacking position (Marbin).
  CMP.B       #$20, ($5A, A0)           ; Compares 20 and ($5A + A0), look direction.
  BNE         $143716                   ; If it is not 20, it is attacking right, ignore the 3 lines below
  MOVE.W      #$2, ($40, A0)            ; Stores 2 inside ($40, A0), move speed 2.
  MOVE.W      #$20, ($B0, A0)           ; Stores 20 inside ($B0, A0), screen position to attack.
  RTS                                   ; Returns back to the routine that called this code.
  MOVE.W      #$FFFE, ($40, A0)         ; Stores FFFE inside ($40, A0), move speed -2.
  MOVE.W      #$160, ($B0, A0)          ; Stores 160 inside ($B0, A0), screen position to attack.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143740

                                        ; Block of code sets speed and attacking position (Carol / Brenda).
  CMP.B       #$20, ($5A, A0)           ; Compares 20 and ($5A + A0), look direction.
  BNE         $143756                   ; If it is not 20, it is attacking right, ignore the 3 lines below
  MOVE.W      #$2, ($40, A0)            ; Stores 2 inside ($40, A0), move speed 2.
  MOVE.W      #$20, ($BE, A0)           ; Stores 20 inside ($BE, A0), screen position to attack.
  RTS                                   ; Returns back to the routine that called this code.
  MOVE.W      #$FFFE, ($40, A0)         ; Stores FFFE inside ($40, A0), move speed -2.
  MOVE.W      #$160, ($BE, A0)          ; Stores 160 inside ($BE, A0), screen position to attack.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $143780

                                        ; Block of code sets speed and attacking position (Cyborg).
  CMP.B       #$20, ($5A, A0)           ; Compares 20 and 5A, look direction.
  BNE         $143756                   ; If it is not 20, it is attacking right, ignore the 3 lines below
  MOVE.W      #$2, ($40, A0)            ; Stores 2 inside ($40, A0), move speed 2.
  MOVE.W      #$20, ($A8, A0)           ; Stores 20 inside ($BE, A0), screen position to attack.
  RTS                                   ; Returns back to the routine that called this code.
  MOVE.W      #$FFFE, ($40, A0)         ; Stores FFFE inside ($40, A0), move speed -2.
  MOVE.W      #$160, ($A8, A0)          ; Stores 160 inside ($BE, A0), screen position to attack.
  RTS                                   ; Returns back to the routine that called this code.


; This module has routines that adds / improves / fixes enemies postures.
;
; 020D9E: Adds Support To Custom Postures (Samson / Organo)
; 0252F6: Adds Support To Custom Postures (Skip / Sonie)
; 025332: Fix Falling Posture (Skip / Sonie)
; 029D4A: Adds Support To Custom Postures (Marbin)
; 02D220: Improves Default Posture Spawn Range (Musashi)
; 035154: Sets Item Drop Posture Data (Cyborg)
; 0351BE: Fixes Claw Posture (Cyborg)
; 03707C: Fix Falling Posture (Carol / Brenda)
; 037138: Improves Walking Posture Spawn Range (Carol / Brenda)
; 037266: Improves Shocking Posture Spawn Range (Carol / Brenda)
; 03727C: Fixes Item Drop Posture (Carol / Brenda)
; 0372CC: Sets Shocking Posture Data (Carol / Brenda)
; 037300: Fixes Shocking Posture (Carol / Brenda)
; 037314: Fixes Shocking Posture (Carol / Brenda)
; 058D14: Improves How Dr. T. W. Ends Stage 4
; 05BC94: Improves Default Posture Spawn Range (Wooky)
; 061D3E: Improves Default Posture Spawn Range (Eddy)
; 065D6A: Improves Default Spawn Range (Dick)
; 06C802: Improves Default Posture Spawn Range (Kojiro)
; 06CA8E: Improves Teleport Posture Spawn Range (Kojiro)
; 0705CC: Improves Default Posture Spawn Range (Hanzo)
; 07083C: Improves Teleport Posture Spawn Range (Hanzo)
; 074306: Improves Default Posture Spawn Range (Sasuke)
; 074576: Improves Teleport Posture Spawn Range (Sasuke)
; 0A0D7A: Increases Out Of Screen Despawn Limit (Falling Barrel)
; 143700: Sets Blowing Fire Posture Data (Marbin)
; 143740: Sets Shocking Posture Data (Carol / Brenda)
; 143780: Sets Claw Posture Data (Cyborg)