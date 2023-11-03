*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Area Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines to bring improvements to areas.
*               It has a routine that allows a custom code to be executed
*               when an area starts.
*----------------------------------------------------------------------------------------------

  JMP         $143600                   ; Replace 5F74.

; ORG         $143600

                                        ; Block of code that adds support to a custom code to be executed.
  MOVEQ       #$0, D0                   ; Stores 0 inside D0, clears the register.
  MOVE.B      ($28CE, A5), D0           ; Stores ($28CE + A5) inside D0, the stage ID.
  LSL.B       #2, D0                    ; Shifts left D0 bits by 2, 0 is 0, 1 is 4, 2 to 8, etc.
  MOVE.L      ($16, PC, D0.W), D0       ; Stores ($16 + PC + D0.W) inside D0, the code to execute address.
  TST.L       D0                        ; Compares 0 and D0.
  BEQ         $143614                   ; If it is 0, no custom stage code, ignore the 2 lines below.
  MOVE.L      D0, A4                    ; Stores D0 inside A4.
  JSR         (A4)                      ; Calls the stage custom code.
  MOVEQ       #$0, D0                   ; Code from the original game that was replaced to jump to this code.
  MOVE.B      ($28CE, A5), D0           ; Code from the original game that was replaced to jump to this code.
  JMP         $5F7A.L                   ; Jumps back to where it stopped in the original code.


; This module has a routine that allows a custom code to be executed
; after an area initializes.
;
; 143600: Executes Stage Custom Code
; 143620: Custom Code Address List