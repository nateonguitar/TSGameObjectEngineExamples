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
var Player_1 = require("../Player");
var BackBarrier_1 = require("../BackBarrier");
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile(params) {
        var _this = _super.call(this, { layer: 1 }) || this;
        _this.setDefaultCollider();
        if (params.hasCollider) {
            _this.collider.allowPassThroughWhitelist = [BackBarrier_1.BackBarrier];
            if (params.allowPassThrough) {
                _this.collider.allowPassThroughWhitelist.push(Player_1.Player);
            }
            _this.breakFromBeneath = params.breakFromBeneath;
        }
        _this.spritesheetAnimationSet = params.spritesheetAnimationSet;
        dist_1.Input.registerMouseDown(_this, _this.mousedown);
        return _this;
    }
    Tile.prototype.mousedown = function (coords, gameObjects) {
        for (var _i = 0, gameObjects_1 = gameObjects; _i < gameObjects_1.length; _i++) {
            var obj = gameObjects_1[_i];
            if (obj == this) {
                var manager = dist_1.GameManager.currentLevel.managingGameObject;
                manager.destroyTile(this);
            }
        }
    };
    /** override if you want other behavior */
    Tile.prototype.onHitFromBeneath = function () {
        var manager = dist_1.GameManager.currentLevel.managingGameObject;
        if (this.breakFromBeneath) {
            manager.destroyTile(this);
        }
    };
    Tile.spriteSheet = 'Images/SpriteSheetTiles.png';
    Tile.spriteSize = new dist_1.Vector2(16, 16);
    return Tile;
}(dist_1.GameObject));
exports.Tile = Tile;
//# sourceMappingURL=Tile.js.map