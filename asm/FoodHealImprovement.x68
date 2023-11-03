*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Food Heal Improvement
* Written by:   GameHackFan
* Date:         
* Description:  Brings improvements to how healing is handled.
*               Adds support to a 2 bytes value for healing.
*----------------------------------------------------------------------------------------------

; ORG         $A95DA                    ; Replaces A95DA (There is space enough to replace all the code).

                                        ; Block of code that improves babercue food healing.
  MOVE.W      #$48, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game.
  BNE         $A96BA                    ; Code from the original game.
  MOVE.W      #$6C, D1                  ; Code from the original game.
  BRA         $A9662                    ; Code from the original game readjusted.

                                        ; Block of code that improves tendon food healing.
  MOVE.W      #$37, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game
  BNE         $A96BA                    ; Code from the original game
  MOVE.W      #$5C, D1                  ; Code from the original game
  BRA         $A9662                    ; Code from the original game readjusted.

                                        ; Block of code that improves sandwich food healing.
  MOVE.W      #$28, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game
  BNE         $A96BA                    ; Code from the original game
  MOVE.W      #$44, D1                  ; Code from the original game
  BRA         $A9662                    ; Code from the original game readjusted.

                                        ; Block of code that improves chocolate food healing.
  MOVE.W      #$1E, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game
  BNE         $A96BA                    ; Code from the original game
  MOVE.W      #$34, D1                  ; Code from the original game
  BRA         $A9662                    ; Code from the original game readjusted.

                                        ; Block of code that improves coffee food healing.
  MOVE.W      #$19, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game
  BNE         $A96BA                    ; Code from the original game
  MOVE.W      #$34, D1                  ; Code from the original game
  BRA         $A9662                    ; Code from the original game readjusted.

                                        ; Block of code that improves lemon food healing.
  MOVE.W      #$0C, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game
  BNE         $A96BA                    ; Code from the original game
  MOVE.W      #$24, D1                  ; Code from the original game
  BRA         $A96D8                    ; Code from the original game

                                        ; Block of code that improves cherry food healing.
  MOVE.W      #$10, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game
  BNE         $A96BA                    ; Code from the original game
  MOVE.W      #$24, D1                  ; Code from the original game
  BRA         $A96D8                    ; Code from the original game



; ORG         $A96A6                    ; Replaces A96A6 (There is space enough to replace all the code).

                                        ; Block of code that improves ice cream food healing.
  MOVE.W      #$14, D0                  ; Code from the original game readjusted.
  CMP.W       #$48, ($3C, A6)           ; Code from the original game
  BNE         $A96BA                    ; Code from the original game
  MOVE.W      #$2C, D1                  ; Code from the original game readjusted.
  BRA         $A96D8                    ; Code from the original game readjusted.



; This module fixes the code that handles food healing, 
; adding support to a 2 bytes value instead of 1 byte.
; 
; 0A95DA: Add 2 Bytes Support For Food Healing 1.
; 0A96A6: Add 2 Bytes Support For Food Healing 2.