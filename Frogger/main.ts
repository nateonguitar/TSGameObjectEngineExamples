import { GameLauncher, GameOptions } from "game-object-engine/dist";
import { MainLevel } from "./Levels";

export function froggerGameLauncher() {
    new GameLauncher(<GameOptions>{
        parentElementID: 'game-holder',
        screenWidth: 1000,
        screenHeight: 800,
        imageAntiAliasing: false,
        layers: 5,
        showDebug: true,
        backgroundColor: "#000011",
        border: "1px solid #000088",
        allowToggleDebug: true,
        levelClasses: {
            'MainLevel': MainLevel,
        },
        initialLevel: 'MainLevel'
    });
}