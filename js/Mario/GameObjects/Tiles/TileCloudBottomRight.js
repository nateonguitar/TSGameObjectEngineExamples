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
var _1 = require(".");
var dist_1 = require("game-object-engine/dist");
var TileCloudBottomRight = /** @class */ (function (_super) {
    __extends(TileCloudBottomRight, _super);
    function TileCloudBottomRight() {
        return _super.call(this, {
            hasCollider: false,
            allowPassThrough: true,
            breakFromBeneath: false,
            spritesheetAnimationSet: new dist_1.SpritesheetAnimationSet({
                spritesheetAnimations: {
                    "idle": new dist_1.SpritesheetAnimation({
                        imageSrc: _1.Tile.spriteSheet,
                        transforms: [
                            new dist_1.Transform({
                                position: new dist_1.Vector2(_1.Tile.spriteSize.x * 2, _1.Tile.spriteSize.y * 21),
                                size: _1.Tile.spriteSize
                            })
                        ],
                        msPerFrame: 10000,
                        loop: false
                    }),
                },
                startAnimationName: "idle"
            })
        }) || this;
    }
    return TileCloudBottomRight;
}(_1.Tile));
exports.TileCloudBottomRight = TileCloudBottomRight;
//# sourceMappingURL=TileCloudBottomRight.js.map