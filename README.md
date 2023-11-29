# CCREE - Captain Commando Readjusted Editor (Arcade)
An editor for the game Captain Commando Readjusted (Arcade).
<br/><br/>

You can access the editor [here](https://gamehackfan.github.io/ccree/).
<br/><br/>

Version 0.2:
- Removed CaptreImprovementPatch, not necessary anymore, CAPTRE v1.2 brings the same changes.
- Updated the editor to work with CAPTRE v1.2 instead of v1.1.
- Added assembly code to improve Wooky default posture spawn range to avoid softlocks.
- Added assembly code to improve Eddy default posture spawn range to avoid softlocks.
- Added assembly code to improve Dick default posture spawn range to avoid softlocks.
- Added assembly code to improve Kojiro default posture spawn range to avoid softlocks.
- Added assembly code to improve Hanzo default posture spawn range to avoid softlocks.
- Added assembly code to improve Sasuke default posture spawn range to avoid softlocks.
- Added assembly code to improve Musashi default posture spawn range to avoid softlocks.
- Added assembly code to improve Carol walking posture spawn range to avoid softlocks.
- Added assembly code to improve Carol shocking posture spawn range to avoid softlocks.
- Fixed assembly code to improve Kojiro teleport posture spawn range to avoid softlocks.
- Fixed assembly code to improve Hanzo teleport posture spawn range to avoid softlocks.
- Fixed assembly code to improve Sasuke teleport posture spawn range to avoid softlocks.
- Minor changes.

See all changes made [here](https://github.com/GameHackFan/ccree/blob/main/changelog).
<br/><br/>

NOTE: The editor is pretty new, more unknown bugs might happen.
<br/><br/>

Known Bugs:
- Doppel, when he transforms for the second time, it is possible to hold some of his replicas, not allowing them to transform, which will lead to him spawning more replicas then he should (have no clue if it can be done in the original game, but it can in the readjusted version).
- On 5th Stage, P1, P2 and P3 can jump on the platform behind them, making their character float
(bug present in the original game).
- On 4th Stage, if you get to the boss with the Green Robot, the player with the robot can grab Monster while another player punch him to death, he doesn't even move (bug present in the original game).
- If you reach a boss right after the time expires, you don't lose your life, you can defeat the boss with the time label on the screen and nothing happens (bug present in the original game).
- If you let the time expire and you do not let your character to go back to the idle action, for example you keep punching or jumping forever, it will display a time over label but the game will not be able to kill you until you fail to keep punching or jumping, you can even beat the entire stage like that (bug present in the original game).
<br/><br/>


WHAT'S NEXT: Add some more extra features, add subosses?.
