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
var dist_1 = require("game-object-engine/dist");
var _1 = require("./");
var MainLevel = /** @class */ (function (_super) {
    __extends(MainLevel, _super);
    function MainLevel() {
        return _super.call(this, {
            managingGameObjectClass: _1.MainLevelController,
            imageSrcs: [
                'Images/FroggerSpritesheet.png',
            ],
            // extraViewportPadding: new Vector2(GameManager.options.screenWidth*2, GameManager.options.screenHeight*2),
            unitSize: 100,
        }) || this;
    }
    return MainLevel;
}(dist_1.Level));
exports.MainLevel = MainLevel;
//# sourceMappingURL=MainLevel.js.map