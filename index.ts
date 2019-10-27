import { zeldaGameLauncher } from './Zelda/main';
import { marioGameLauncher } from './Mario/main';
import { froggerGameLauncher } from './Frogger/main';
import { tetrisGameLauncher } from './Tetris/main';

declare let gameType;

if (gameType == 'zelda') {
    window.addEventListener('load', zeldaGameLauncher, false);
}
else if (gameType == 'mario') {
    window.addEventListener('load', marioGameLauncher, false);
}
else if (gameType == 'frogger') {
    window.addEventListener('load', froggerGameLauncher, false);
}
else if (gameType == 'tetris') {
    window.addEventListener('load', tetrisGameLauncher, false);
}