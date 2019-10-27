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
    function Player() {
        var _this = _super.call(this, {
            layer: 2,
            name: null
        }) || this;
        _this.spriteSize = new dist_1.Vector2(57, 77);
        // jumping
        _this.jumping = false;
        _this.pressedSpace = false;
        _this.jumpStartTime = 0;
        _this.jumpDuration = 450;
        _this.targetDestination = null;
        _this.initialPosition = null;
        _this.spritesheetAnimationSet = new dist_1.SpritesheetAnimationSet({
            spritesheetAnimations: {
                "idle": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/FroggerSpritesheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 0), size: _this.spriteSize })
                    ],
                    msPerFrame: 10000,
                    loop: false
                }),
                "jumping": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/FroggerSpritesheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(_this.spriteSize.x, 0), size: _this.spriteSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(_this.spriteSize.x * 2, 0), size: _this.spriteSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(_this.spriteSize.x * 3, 0), size: _this.spriteSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(_this.spriteSize.x * 4, 0), size: _this.spriteSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(_this.spriteSize.x * 5, 0), size: _this.spriteSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 0), size: _this.spriteSize }),
                    ],
                    msPerFrame: 75,
                    loop: false
                }),
            },
            startAnimationName: "idle"
        });
        _this.collider = new dist_1.RectCollider({
            position: new dist_1.Vector2(0, 0.1),
            size: new dist_1.Vector2(0.8, 0.5)
        });
        _this.transform.size.x = 0.75;
        return _this;
    }
    // override
    Player.prototype.update = function () {
        this.handleInput();
        if (this.targetDestination) {
            this.transform.position = this.transform.position.moveTowards(this.targetDestination, 0.05);
            if (this.transform.position.equals(this.targetDestination)) {
                this.targetDestination = null;
                this.spritesheetAnimationSet.currentAnimationName = "idle";
            }
        }
        // if (this.transform.position.y < -this.initialPosition.y) {
        // 	this.targetDestination = null;
        // 	this.goToInitialPosition();
        // }
        if (this.jumping && this.jumpStartTime + this.jumpDuration <= dist_1.Time.time) {
            this.jumping = false;
        }
    };
    Player.prototype.setInitialPosition = function (position) {
        this.initialPosition = position;
    };
    Player.prototype.goToInitialPosition = function () {
        this.transform.position = this.initialPosition.clone();
        this.spritesheetAnimationSet.currentAnimationName = "idle";
    };
    Player.prototype.handleInput = function () {
        if (dist_1.Input.keys(dist_1.Keys.Space) && !this.jumping) {
            this.pressedSpace = true;
        }
        var speed = 0.1;
        if (dist_1.Input.keys(dist_1.Keys.ArrowUp)) {
            this.transform.position.y -= speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.ArrowDown)) {
            this.transform.position.y += speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.ArrowLeft)) {
            this.transform.position.x -= speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.ArrowRight)) {
            this.transform.position.x += speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.KeyA)) {
            this.transform.size.x -= speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.KeyD)) {
            this.transform.size.x += speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.KeyW)) {
            this.transform.size.y += speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.KeyS)) {
            this.transform.size.y -= speed;
        }
        if (dist_1.Input.keys(dist_1.Keys.KeyQ)) {
            this.transform.rotation += 0.1;
        }
        if (dist_1.Input.keys(dist_1.Keys.KeyE)) {
            this.transform.rotation -= 0.1;
        }
        // space keyup
        if (this.pressedSpace && !dist_1.Input.keys(dist_1.Keys.Space)) {
            this.spritesheetAnimationSet.currentAnimationName = "jumping";
            this.pressedSpace = false;
            this.jumping = true;
            this.jumpStartTime = dist_1.Time.time;
            this.targetDestination = this.transform.position.clone();
            this.targetDestination.y -= 1;
        }
    };
    return Player;
}(dist_1.GameObject));
exports.Player = Player;
//# sourceMappingURL=Player.js.map