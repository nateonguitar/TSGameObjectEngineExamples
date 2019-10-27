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
var Tiles_1 = require("./Tiles");
var BackBarrier = /** @class */ (function (_super) {
    __extends(BackBarrier, _super);
    function BackBarrier() {
        var _this = _super.call(this) || this;
        _this.collider = new dist_1.RectCollider({
            position: new dist_1.Vector2(-8.35, 0),
            size: new dist_1.Vector2(1, 20),
            allowPassThroughWhitelist: [Tiles_1.Tile]
        });
        _this.init();
        return _this;
    }
    BackBarrier.prototype.init = function () {
        this.transform.position.y = 9;
        this.transform.position.x = 7.5;
        dist_1.GameManager.camera.follow(this);
    };
    BackBarrier.prototype.update = function () {
        var player = dist_1.GameManager.currentLevel.managingGameObject.player;
        // follow player any time he is farther than the center of the screen
        if (player.transform.position.x > this.transform.position.x) {
            this.transform.position.x = player.transform.position.x;
        }
        if (this.currentCollidingObjects.indexOf(player) >= 0) {
            player.transform.position.x = this.transform.position.x - 7.35;
            player.velocity.x = 0;
        }
    };
    return BackBarrier;
}(dist_1.GameObject));
exports.BackBarrier = BackBarrier;
//# sourceMappingURL=BackBarrier.js.map