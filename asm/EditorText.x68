*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Editor Text
* Written by:   GameHackFan
* Date:         
* Description:  Adds extra texts about the tool and hack.
*----------------------------------------------------------------------------------------------

; ORG         $140C30

                                        ; Block of code that prints the hack name and version in the screen.
  MOVE.W      #$0F, D1                  ; Stores F inside D1, the pallete ID of the text, blue.
  LEA         $140D51, A1               ; Stores $140D51 inside A1, the hack name text address.
  LEA         $9009C4, A0               ; Stores $9009C4 inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  LEA         $140D60, A1               ; Stores $140D60 inside A1, the hack link address.
  LEA         $900348, A0               ; Stores $900348 inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  LEA         $140D90, A1               ; Stores $140D90 inside A1, the tool text address.
  LEA         $90054C, A0               ; Stores $90054C inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  LEA         $140DC0, A1               ; Stores $140DC0 inside A1, the hack author text address.
  LEA         $9005D0, A0               ; Stores $900348 inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $140C90

                                        ; Block of code that prints the hack name and version in the screen.
  MOVE.W      #$10, D1                  ; Stores 10 inside D1, the pallete ID of the text, yellow.
  LEA         $140D40, A1               ; Stores $140D40 inside A1, the hack name text address.
  LEA         $900554, A0               ; Stores $9009C4 inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  LEA         $140D60, A1               ; Stores $140D60 inside A1, the hack link address.
  LEA         $900358, A0               ; Stores $900348 inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  LEA         $140D90, A1               ; Stores $140D90 inside A1, the tool text address.
  LEA         $90055C, A0               ; Stores $90054C inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  LEA         $140DC0, A1               ; Stores $140DC0 inside A1, the hack author text address.
  LEA         $9005E0, A0               ; Stores $900348 inside A0, the screen region of the text.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $140C90

                                        ; Block of code that prints the starting soon text in the screen.
  LEA         $140D30, A1               ; Stores $140D30 inside A1, the starting soon text address.
  LEA         $9008E8, A0               ; Stores $9009C4 inside A0, the screen region of the text.
  MOVE.W      #$0F, D1                  ; Stores F inside D1, the pallete ID of the text, blue.
  BSR         $140C00                   ; Calls the routine that prints the text in the screen.
  RTS                                   ; Returns back to the routine that called this code.



; This module has routines that modifies the default routines that
; draws the hack texts in the screen, adding all the editor texts.
; 
; 140C30: Prints Hack Text (Title Screen)
; 140C30: Prints Hack Text (Select Screen)
; 140C30: Prints Starting Soon Text (Select Screen)
;
;
; Level Editor Text Screen Region Address
;
;
; Randomizer Text Screen Region Address
; 9009C4, 900348, 90054C, 9005D0
; 900554, 900358, 90055C, 9005E0
;
; Default Text Screen Region Address

