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
var _1 = require(".");
var LogSmall = /** @class */ (function (_super) {
    __extends(LogSmall, _super);
    function LogSmall(name) {
        var _this = _super.call(this, name) || this;
        var spriteStartPoint = new dist_1.Vector2(389, 258);
        var spriteSize = new dist_1.Vector2(183, 57);
        _this.spritesheetAnimationSet = new dist_1.SpritesheetAnimationSet({
            spritesheetAnimations: {
                "idle": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/FroggerSpritesheet.png',
                    transforms: [
                        new dist_1.Transform({ position: spriteStartPoint, size: spriteSize })
                    ],
                    msPerFrame: 10000,
                    loop: false
                }),
            },
            startAnimationName: "idle"
        });
        _this.transform.size.x = 2;
        _this.collider.allowPassThroughWhitelist = [];
        return _this;
    }
    return LogSmall;
}(_1.LandingObject));
exports.LogSmall = LogSmall;
//# sourceMappingURL=LogSmall.js.map