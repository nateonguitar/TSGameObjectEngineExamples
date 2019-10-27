"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OverworldController_1 = require("./OverworldController");
var dist_1 = require("game-object-engine/dist");
var OverworldLevel = /** @class */ (function (_super) {
    __extends(OverworldLevel, _super);
    function OverworldLevel() {
        return _super.call(this, {
            managingGameObjectClass: OverworldController_1.OverworldController,
            imageSrcs: [
                'Images/Link.png',
                'Images/Overworld.png',
                'Images/SoldierBlue.png',
                'Images/SoldierGreenWalkDownSpritesheet.png',
                'Images/SoldierGreenWalkSideSpritesheet.png',
            ],
            // allow half the viewport size around the viewport to update off screen
            extraViewportPadding: new dist_1.Vector2(dist_1.GameManager.options.screenWidth, dist_1.GameManager.options.screenHeight).scale(0.5)
        }) || this;
    }
    return OverworldLevel;
}(dist_1.Level));
exports.OverworldLevel = OverworldLevel;
//# sourceMappingURL=OverworldLevel.js.map