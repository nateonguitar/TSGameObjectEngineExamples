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
var dist_2 = require("game-object-engine/dist");
var GameObjects_1 = require("../GameObjects");
var OverworldController = /** @class */ (function (_super) {
    __extends(OverworldController, _super);
    function OverworldController() {
        var _this = _super.call(this, {
            layer: 0
        }) || this;
        _this.player = null;
        _this.background = null;
        _this.enemies = [];
        var boundarySize = new dist_2.Vector2(60, 60);
        _this.background = new GameObjects_1.OverworldBackground(boundarySize);
        dist_1.Debug.trackGameObject(_this.background);
        _this.player = new GameObjects_1.Player(boundarySize);
        // move player position to center of map
        _this.player.transform.position = _this.background.transform.position.clone();
        dist_1.Debug.trackGameObject(_this.player);
        // put the camera on top of the player (in case you want to test removing the player from the camera)
        dist_1.GameManager.camera.worldspacePosition = _this.player.transform.position;
        // camera follow
        dist_1.GameManager.camera.follow(_this.player);
        for (var i = 0; i < 50; i++) {
            _this.enemies.push(new GameObjects_1.SoldierGreen(boundarySize));
            _this.enemies.push(new GameObjects_1.SoldierBlue(boundarySize));
            _this.enemies.push(new GameObjects_1.SoldierBlue(boundarySize));
            _this.enemies.push(new GameObjects_1.SoldierBlue(boundarySize));
        }
        return _this;
    }
    OverworldController.prototype.update = function () {
        if (dist_1.Input.keys(dist_1.Keys.Key1) && dist_1.GameManager.unitSize > 5) {
            dist_1.GameManager.currentLevel.unitSize -= 0.5;
        }
        if (dist_1.Input.keys(dist_1.Keys.Key2) && dist_1.GameManager.unitSize < 500) {
            dist_1.GameManager.currentLevel.unitSize += 0.5;
        }
    };
    return OverworldController;
}(dist_1.GameObject));
exports.OverworldController = OverworldController;
//# sourceMappingURL=OverworldController.js.map