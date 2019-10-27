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
var Data_1 = require("../../Data");
var TileQuestionMark = /** @class */ (function (_super) {
    __extends(TileQuestionMark, _super);
    function TileQuestionMark() {
        var _this = _super.call(this, {
            hasCollider: true,
            allowPassThrough: false,
            breakFromBeneath: false,
            spritesheetAnimationSet: new dist_1.SpritesheetAnimationSet({
                spritesheetAnimations: {
                    "idle": new dist_1.SpritesheetAnimation({
                        imageSrc: _1.Tile.spriteSheet,
                        transforms: [
                            new dist_1.Transform({
                                position: new dist_1.Vector2(_1.Tile.spriteSize.x * 24, 0),
                                size: _1.Tile.spriteSize
                            }),
                        ],
                        msPerFrame: 10000,
                        loop: false
                    }),
                    "flash": new dist_1.SpritesheetAnimation({
                        imageSrc: _1.Tile.spriteSheet,
                        transforms: [
                            new dist_1.Transform({
                                position: new dist_1.Vector2(_1.Tile.spriteSize.x * 25, 0),
                                size: _1.Tile.spriteSize
                            }),
                            new dist_1.Transform({
                                position: new dist_1.Vector2(_1.Tile.spriteSize.x * 26, 0),
                                size: _1.Tile.spriteSize
                            }),
                            new dist_1.Transform({
                                position: new dist_1.Vector2(_1.Tile.spriteSize.x * 24, 0),
                                size: _1.Tile.spriteSize
                            }),
                        ],
                        msPerFrame: 200,
                        loop: false
                    }),
                    "spent": new dist_1.SpritesheetAnimation({
                        imageSrc: _1.Tile.spriteSheet,
                        transforms: [
                            new dist_1.Transform({
                                position: new dist_1.Vector2(_1.Tile.spriteSize.x * 3, 0),
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
        _this.spent = false;
        _this.flashing = false;
        _this.idleDuration = 2000;
        _this.idleStartTime = 0;
        _this.flashDuration = 400;
        _this.flashStartTime = 0;
        _this.idleStartTime = dist_1.Time.time;
        return _this;
    }
    TileQuestionMark.prototype.update = function () {
        if (!this.spent) {
            if (this.flashing) {
                if (this.flashStartTime + this.flashDuration <= dist_1.Time.time) {
                    this.flashing = false;
                    this.spritesheetAnimationSet.currentAnimationName = "idle";
                    this.idleStartTime = dist_1.Time.time;
                }
            }
            else {
                if (this.idleStartTime + this.idleDuration <= dist_1.Time.time) {
                    this.flashing = true;
                    this.spritesheetAnimationSet.currentAnimationName = "flash";
                    this.flashStartTime = dist_1.Time.time;
                }
            }
        }
    };
    // override
    TileQuestionMark.prototype.onHitFromBeneath = function () {
        if (!this.spent) {
            this.spent = true;
            Data_1.Data.coins++;
            if (Data_1.Data.coins >= 100) {
                Data_1.Data.coins = 0;
                Data_1.Data.lives++;
                Data_1.Data.hud.lives.text = "Lives " + Data_1.Data.lives.toString();
            }
            Data_1.Data.hud.coins.text = "Coins " + Data_1.Data.coins.toString();
            this.spritesheetAnimationSet.currentAnimationName = "spent";
        }
    };
    return TileQuestionMark;
}(_1.Tile));
exports.TileQuestionMark = TileQuestionMark;
//# sourceMappingURL=TileQuestionMark.js.map