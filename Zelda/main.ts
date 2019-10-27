import { GameLauncher } from "game-object-engine/dist";
import { OverworldLevel } from "./Levels/OverworldLevel";

export function zeldaGameLauncher() {
    new GameLauncher({
        parentElementID: "game-holder",
        screenWidth: 800,
        screenHeight: 750,
        imageAntiAliasing: false,
        layers: 4,
        showDebug: true,
        backgroundColor: "#001100",
        border: "1px solid #008800",
        allowToggleDebug: true,
        drawColliders: true,
        drawTransforms: true,
        drawCenteredCross: true,
        levelClasses: {
            'Overworld': OverworldLevel,
        },
        initialLevel: 'Overworld'
    });
}