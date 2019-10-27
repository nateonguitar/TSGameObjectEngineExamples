import { GameLauncher } from "game-object-engine/dist";
import { TetrisLevel } from "./TetrisLevel";

export function tetrisGameLauncher() {
    new GameLauncher({
        parentElementID: "game-holder",
        screenWidth: 800,
        screenHeight: 600,
        imageAntiAliasing: false,
        layers: 5,
        showDebug: true,
        backgroundColor: "#330000",
        border: "1px solid red",
        allowToggleDebug: true,
        levelClasses: {
            'Tetris': TetrisLevel
        },
    });
}