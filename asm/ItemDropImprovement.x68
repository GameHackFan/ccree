*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Item Drop Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has a routine that improves the way barrels drop items.
*----------------------------------------------------------------------------------------------

; ORG         $9E408

                                        ; Block of code that improves the way barrel drops items.
  LEA         $143A00, A1               ; Stores 143A00 inside A1, item drop list start address.
  LSL.W       #$4, D1                   ; Shifts left D1 bits by 4, 0 is 0, 2 is 20, 4 to 40, etc.
  ADD.W       D1, A1                    ; Adds D1 to A1, the list of items offset.
  BRA         $9E3A4                    ; Jumps to the code that handles the item drop.


; ORG         $A0F54

                                        ; Block of code that removes item drop counter check.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $A1114

                                        ; Block of code that improves the way falling drumcan drops items.
  AND.W       #$0F, D0                  ; D0 and 0F, to ensure random value is between 0 and FF.
  ADD.W       D0, D0                    ; Adds D0 to D0, each entry in the list is 2 bytes.
  LEA         $143A00, A1               ; Stores 143A00 inside A1, item drop list start address.
  CLR.W       D1                        ; Clears D1.
  MOVE.B      ($17, A0), D1             ; Stores ($17 + A0) inside D1, drop list ID.
  LSL.W       #$4, D1                   ; Shifts left D1 bits by 4, 0 is 0, 2 is 20, 4 to 40, etc.
  ADD.W       D1, A1                    ; Adds D1 to A1, the list of items offset.
  MOVE.W      (A1, D0.W), D1            ; Stores (A1 + D0.W) inside D1, the item ID.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  JSR         $36AA.L                   ; Code from the original game readjusted.



; This module has routines that improves the way items are dropped
; by barrels. All items now are being dropped based on a list of
; items. The list of items was also improved in a way it covers All
; items and it also has new random drops.
;
; 09E408: Forces Barrels Item Drops To Be Based On a List
; 0A0F54: Removes Falling Barrels Item Drop Counter Check
; 0A1114: Forces Falling Drumcan Item Drops To Be Based On a List