import { GameLauncher, GameOptions } from "game-object-engine/dist";
import { Level01 } from "./Levels";

export function marioGameLauncher() {
    new GameLauncher(<GameOptions>{
        parentElementID: "game-holder",
        screenWidth: 800,
        screenHeight: 600,
        imageAntiAliasing: false,
        layers: 5,
        showDebug: true,
        backgroundColor: "#000011",
        border: "1px solid #000088",
        allowToggleDebug: true,
        font: "Courier New",
        levelClasses: {
            'Level01': Level01,
        },
    });
}