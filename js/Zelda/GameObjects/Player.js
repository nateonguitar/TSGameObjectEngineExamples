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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(boundarySize) {
        var _this = _super.call(this, {
            layer: 2,
            imageSrc: "Images/Link.png",
            name: "player"
        }) || this;
        _this.speed = 0.1;
        _this.boundarySize = null;
        _this.holdingMouse = false;
        _this.boundarySize = boundarySize;
        _this.transform.size = new dist_1.Vector2(0.75, 1);
        _this.setDefaultCollider();
        dist_1.Input.registerMouseDown(_this, _this.mousedown);
        dist_1.Input.registerMouseUp(_this, _this.mouseup);
        return _this;
    }
    // override
    Player.prototype.update = function () {
        this.handleMovement();
        if (this.holdingMouse) {
            // console.log(this.transform.position);
        }
        if (dist_1.Input.keys(dist_1.Keys.Space)) {
            console.log("keys.space");
        }
    };
    Player.prototype.handleMovement = function () {
        // don't allow repeat moves, have to press the button again
        // left
        var p = this.transform.position;
        if (dist_1.Input.keys(dist_1.Keys.ArrowLeft)) {
            p.x -= this.speed;
        }
        // right
        if (dist_1.Input.keys(dist_1.Keys.ArrowRight)) {
            p.x += this.speed;
        }
        // up
        if (dist_1.Input.keys(dist_1.Keys.ArrowUp)) {
            p.y -= this.speed;
        }
        // up
        if (dist_1.Input.keys(dist_1.Keys.ArrowDown)) {
            p.y += this.speed;
        }
        if (this.transform.position.x < 0) {
            this.transform.position.x = 0;
        }
        if (this.transform.position.y < 0) {
            this.transform.position.y = 0;
        }
        if (this.transform.position.x > this.boundarySize.x) {
            this.transform.position.x = this.boundarySize.x;
        }
        if (this.transform.position.y > this.boundarySize.y) {
            this.transform.position.y = this.boundarySize.y;
        }
    };
    Player.prototype.mousedown = function (coords, gameObjects) {
        for (var _i = 0, gameObjects_1 = gameObjects; _i < gameObjects_1.length; _i++) {
            var obj = gameObjects_1[_i];
            if (obj == this) {
                this.holdingMouse = true;
            }
        }
    };
    Player.prototype.mouseup = function (coords, gameObjects) {
        this.holdingMouse = false;
    };
    Player.prototype.onCollisionEnter = function (other) {
    };
    return Player;
}(dist_1.GameObject));
exports.Player = Player;
//# sourceMappingURL=Player.js.map