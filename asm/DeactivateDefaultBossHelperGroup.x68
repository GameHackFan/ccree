*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Deactivate Default Boss Helper Group
* Written by:   GameHackFan
* Date:         
* Description:  Deactives the bosses default boss helper enemy
*               groups from the game.
*----------------------------------------------------------------------------------------------

; ORG         $47C16                    ; Replaces 47C16 (There is space enough to replace all the code).

                                        ; Block of code that deactivate Dolg Helper Groups.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $47C3A                    ; Replaces 47C3A (There is space enough to replace all the code).

                                        ; Block of code that deactivate Dolg Helper Groups.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $47C5E                    ; Replaces 47C5E (There is space enough to replace all the code).

                                        ; Block of code that deactivate Dolg Helper Groups.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $4BF98                    ; Replaces 4BF98 (There is space enough to replace all the code).

                                        ; Block of code that deactivate Shtrom Jr Helper Groups.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.



; This module has routines that deactivates the default boss helper
; enemy groups that are present in the game. This is needed because
; more editor friendly enemy groups are added in their place by the
; custom stage patches, which ends up overlaping with these one.
;
; 047C16: Deactivates Dolg Helper Enemy Group 1
; 047C3A: Deactivates Dolg Helper Enemy Group 2
; 047C5E: Deactivates Dolg Helper Enemy Group 3
; 04BF98: Deactivates Shtrom Jr. Helper Enemy Group