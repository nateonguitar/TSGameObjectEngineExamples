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
var PlayableLevel = /** @class */ (function (_super) {
    __extends(PlayableLevel, _super);
    function PlayableLevel(params) {
        return _super.call(this, {
            managingGameObjectClass: params.managingGameObjectClass,
            imageSrcs: [
                'Images/SpriteSheet.png',
                'Images/SpriteSheetTiles.png',
                '../Zelda/Images/SoldierBlue.png',
            ],
            unitSize: 50,
            hudUnitSize: 25,
            backgroundColor: params.backgroundColor,
            extraViewportPadding: new dist_1.Vector2(0, Infinity)
        }) || this;
    }
    return PlayableLevel;
}(dist_1.Level));
exports.PlayableLevel = PlayableLevel;
//# sourceMappingURL=PlayableLevel.js.map