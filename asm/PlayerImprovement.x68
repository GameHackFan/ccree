*----------------------------------------------------------------------------------------------
* Title:        CAPTRE Player Improvement
* Written by:   GameHackFan
* Date:         
* Description:  It has routines to improve the player character.
*----------------------------------------------------------------------------------------------

; ORG         $17694                    ; Replaces 17694 (There is space enough to replace all the code).

                                        ; Block of code that forces the player to exit the robot (Area Exit)
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $9B448                    ; Replaces 9B448 (There is space enough to replace all the code).

                                        ; Block of code that reduces the damage player takes when inside the robot.
  SUBQ.W      #$2, ($3C, A6)            ; Stores 2 inside ($3C + A6), player taking 2 points of damage.


; ORG         $9B494                    ; Replaces 9B494 (There is space enough to replace all the code).

                                        ; Block of code that reduces the damage the player takes when inside the robot.
  SUBQ.W      #$2, ($3C, A6)            ; Stores 2 inside ($3C + A6), player taking 2 points of damage.


; ORG         $9B4EC                    ; Replaces 9B4EC (There is space enough to replace all the code).

                                        ; Block of code that reduces the damage player takes when inside the robot.
  SUBQ.W      #$2, ($3C, A6)            ; Stores 2 inside ($3C + A6), player taking 2 points of damage.


; ORG         $9B55E                    ; Replaces 9B55E (There is space enough to replace all the code).

                                        ; Block of code that reduces the damage player takes when inside the robot.
  SUBQ.W      #$2, ($3C, A6)            ; Stores 2 inside ($3C + A6), player taking 2 points of damage.


; This module has routines that improves the player character. Right 
; now it only has a routine that improves the damage the player takes
; if he takes a hit inside a robot and a routine that ensures the 
; player will leave the robot at the end of an area to ensure the game
; won't crash.
;
; 017694: Forces Player To Leave the Robot (Area Exit)
; 09B494: Reduces Damage Inside Robot To 2 Points




12764