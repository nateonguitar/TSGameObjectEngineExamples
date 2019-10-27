"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("game-object-engine/dist");
var OverworldLevel_1 = require("./Levels/OverworldLevel");
function zeldaGameLauncher() {
    new dist_1.GameLauncher({
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
            'Overworld': OverworldLevel_1.OverworldLevel,
        },
        initialLevel: 'Overworld'
    });
}
exports.zeldaGameLauncher = zeldaGameLauncher;
window.addEventListener('load', zeldaGameLauncher, false);
//# sourceMappingURL=main.js.map