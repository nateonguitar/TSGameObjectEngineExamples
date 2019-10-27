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
var GameObjects_1 = require("../GameObjects");
var MainLevelController = /** @class */ (function (_super) {
    __extends(MainLevelController, _super);
    function MainLevelController() {
        var _this = _super.call(this, { layer: 0 }) || this;
        _this.player = null;
        _this.river = null;
        _this.logs = [];
        _this.test = null;
        _this.river = new GameObjects_1.River();
        _this.player = new GameObjects_1.Player();
        var initialPosition = _this.river.transform.position.clone();
        initialPosition.y += _this.river.transform.size.y / 2;
        initialPosition.y -= _this.player.transform.size.y / 2;
        _this.player.setInitialPosition(initialPosition);
        _this.player.goToInitialPosition();
        dist_1.Debug.trackGameObject(_this.player);
        dist_1.Debug.trackGameObject(_this.river);
        _this.buildLogs();
        dist_1.GameManager.camera.follow(_this.player);
        return _this;
    }
    // override
    MainLevelController.prototype.update = function () {
        if (dist_1.Input.keys(dist_1.Keys.Key1) && dist_1.GameManager.unitSize > 5) {
            dist_1.GameManager.currentLevel.unitSize -= 0.5;
        }
        if (dist_1.Input.keys(dist_1.Keys.Key2) && dist_1.GameManager.unitSize < 500) {
            dist_1.GameManager.currentLevel.unitSize += 0.5;
        }
    };
    MainLevelController.prototype.buildLogs = function () {
        for (var i = 0; i < 3; i++) {
            var log = new GameObjects_1.LogSmall(i.toString());
            log.transform.position = new dist_1.Vector2(this.player.transform.position.x, this.river.transform.position.y - 0.5 + i * 2);
            this.logs.push(log);
            dist_1.Debug.trackGameObject(log);
        }
    };
    return MainLevelController;
}(dist_1.GameObject));
exports.MainLevelController = MainLevelController;
//# sourceMappingURL=MainLevelController.js.map