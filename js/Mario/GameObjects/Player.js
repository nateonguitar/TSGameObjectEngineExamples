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
var Data_1 = require("../Data");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this, { layer: 2 }) || this;
        _this.maxVelocity = new dist_1.Vector2(0.2, 0.2);
        _this.velocity = dist_1.Vector2.zero;
        _this.velocityChange = 0.0055;
        _this.startPosition = new dist_1.Vector2(2, 13);
        _this.allowedToJump = true;
        _this.jumping = false;
        _this.skidding = false;
        _this.currentAnimationName = null;
        _this.minJumpPressDuration = 200;
        _this.jumpStartTime = 0;
        _this.pressedSpace = false;
        _this.velocityAtJumpTime = 0;
        _this.bumpedTop = false;
        _this.buttons = {
            A: false,
            B: false,
            Left: false,
            Right: false,
            Up: false,
            Down: false
        };
        var tileSize = new dist_1.Vector2(17, 16);
        _this.currentAnimationName = 'idle';
        _this.spritesheetAnimationSet = new dist_1.SpritesheetAnimationSet({
            spritesheetAnimations: {
                "smallIdle": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/SpriteSheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(216, 398), size: tileSize }),
                    ],
                    msPerFrame: 10000
                }),
                "smallJump": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/SpriteSheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(366, 398), size: tileSize }),
                    ],
                    msPerFrame: 10000
                }),
                "smallRun": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/SpriteSheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(246, 398), size: tileSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(276, 398), size: tileSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(306, 398), size: tileSize }),
                        new dist_1.Transform({ position: new dist_1.Vector2(276, 398), size: tileSize }),
                    ],
                    msPerFrame: 75
                }),
                "smallSkid": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/SpriteSheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(336, 398), size: tileSize }),
                    ],
                    msPerFrame: 10000
                }),
            },
            startAnimationName: 'smallIdle'
        });
        _this.transform.position = _this.startPosition.clone();
        _this.setDefaultCollider();
        return _this;
    }
    Player.prototype.init = function () {
        this.transform.position = this.startPosition.clone();
    };
    Player.prototype.update = function () {
        this.detectButtons();
        this.handleMovement();
        this.trackValues();
        this.handleSpritesheetSwapping();
        this.transform.position = this.transform.position.add(this.velocity);
        dist_1.Debug.trackValue({ label: 'player velocity', value: this.velocity.toString() });
        // make mario face the right way
        if (this.velocity.x < 0 && this.transform.size.x > 0 ||
            this.velocity.x > 0 && this.transform.size.x < 0) {
            this.transform.size.x = -this.transform.size.x;
        }
        this.velocity.y += this.velocityChange * 2;
        if (this.velocity.y >= this.maxVelocity.y) {
            this.velocity.y = this.maxVelocity.y;
        }
        this.handleDeathDetection();
    };
    Player.prototype.detectButtons = function () {
        // key mappings
        this.buttons = {
            //     Dpad right hand         || Dpad left hand
            A: dist_1.Input.keys(dist_1.Keys.Slash) || dist_1.Input.keys(dist_1.Keys.Space),
            B: dist_1.Input.keys(dist_1.Keys.Period) || dist_1.Input.keys(dist_1.Keys.ShiftLeft),
            Left: dist_1.Input.keys(dist_1.Keys.KeyA) || dist_1.Input.keys(dist_1.Keys.ArrowLeft),
            Right: dist_1.Input.keys(dist_1.Keys.KeyD) || dist_1.Input.keys(dist_1.Keys.ArrowRight),
            Up: dist_1.Input.keys(dist_1.Keys.KeyW) || dist_1.Input.keys(dist_1.Keys.ArrowUp),
            Down: dist_1.Input.keys(dist_1.Keys.KeyS) || dist_1.Input.keys(dist_1.Keys.ArrowDown),
        };
    };
    Player.prototype.handleMovement = function () {
        ////////////////////////////////////
        // JUMPING
        if (this.buttons.A) {
            if (this.allowedToJump && !this.pressedSpace) {
                this.pressedSpace = true;
                this.jumpStartTime = dist_1.Time.time;
                this.velocityAtJumpTime = Math.abs(this.velocity.x);
                this.velocity.y = -this.maxVelocity.y;
            }
            if (!this.bumpedTop && this.getMaxJumpTime() > dist_1.Time.time) {
                this.velocity.y = -this.maxVelocity.y;
                this.jumping = true;
            }
        }
        if (!this.buttons.A) {
            this.pressedSpace = false;
        }
        // Mario isn't allowed to jump if he's falling.
        // This isn't for his downward arc, this is for falling off of a ledge.
        if (this.jumping || this.velocity.y > 0.125) {
            this.allowedToJump = false;
            this.jumping = true;
            this.setAnimation('jump');
        }
        ////////////////////////////////////
        // LEFT AND RIGHT MOVEMENT
        var speed = this.buttons.Left || this.buttons.Right ? this.velocityChange : 0;
        if (this.buttons.Left) {
            speed *= -1;
        }
        // if moving fast enough, B button should make you move even faster
        if (Math.abs(this.velocity.x) > this.maxVelocity.x * 0.45) {
            speed *= (this.buttons.B) ? 2 : 1;
        }
        // apply speed
        this.velocity.x += speed;
        var max = (this.buttons.B ? this.maxVelocity.x : this.maxVelocity.x * 0.75);
        // limit speed
        if (this.velocity.x < -max) {
            this.velocity.x = -max;
        }
        if (this.velocity.x > max) {
            this.velocity.x = max;
        }
        // reversing behavior
        if (this.buttons.Right) {
            if (this.velocity.x < 0) {
                this.velocity.x += this.velocityChange * (this.buttons.B ? 1 : 0.5);
                this.skidding = true;
            }
            else {
                this.skidding = false;
            }
        }
        // reversing behavior
        else if (this.buttons.Left) {
            if (this.velocity.x > 0) {
                this.velocity.x -= this.velocityChange * (this.buttons.B ? 2 : 1);
                this.skidding = true;
            }
            else {
                this.skidding = false;
            }
        }
        // bring velocity back down to zero
        else {
            if (this.velocity.x < 0) {
                this.velocity.x += this.velocityChange * 2;
            }
            else if (this.velocity.x > 0) {
                this.velocity.x -= this.velocityChange * 2;
            }
            if (Math.abs(this.velocity.x) < this.velocityChange * 2) {
                this.velocity.x = 0;
            }
        }
    };
    Player.prototype.getMaxJumpTime = function () {
        return this.jumpStartTime + this.minJumpPressDuration + this.velocityAtJumpTime * 500;
    };
    Player.prototype.handleDeathDetection = function () {
        if (this.transform.position.y > 17.5) {
            this.transform.position = this.startPosition.clone();
            this.die();
        }
    };
    Player.prototype.handleSpritesheetSwapping = function () {
        if (this.jumping) {
            if (this.currentAnimationName != 'jump') {
                this.setAnimation('jump');
            }
            return;
        }
        if (this.velocity.x == 0) {
            this.setAnimation('idle');
        }
        else if (this.skidding) {
            this.setAnimation('skid');
        }
        else {
            this.setAnimation('run');
        }
    };
    Player.prototype.setAnimation = function (name) {
        this.currentAnimationName = name;
        var smallAnimations = {
            'jump': 'smallJump',
            'run': 'smallRun',
            'idle': 'smallIdle',
            'skid': 'smallSkid'
        };
        var animName = smallAnimations[name];
        if (this.spritesheetAnimationSet.currentAnimationName != animName) {
            this.spritesheetAnimationSet.currentAnimationName = animName;
        }
    };
    Player.prototype.onNoPassthroughTouch = function (other, side) {
        if (other instanceof Tiles_1.Tile) {
            if (side == 'right' || side == 'left') {
                this.velocity.x = 0;
            }
            if (side == 'bottom') {
                this.jumping = false;
                this.allowedToJump = true;
                this.velocity.y = 0;
                this.bumpedTop = false;
            }
            if (side == 'top') {
                this.velocity.y = 0;
                this.allowedToJump = false;
                this.bumpedTop = true;
                other.onHitFromBeneath();
            }
        }
    };
    Player.prototype.die = function () {
        Data_1.Data.lives -= 1;
        Data_1.Data.hud.lives.text = "Lives " + Data_1.Data.lives.toString();
        dist_1.GameManager.currentLevel.managingGameObject.buildLevel();
    };
    Player.prototype.trackValues = function () {
        // Debug.trackValue({
        // 	label: "jump time",
        // 	value: this.getMaxJumpTime().toString()
        // });
        // Debug.trackValue({
        // 	label: "Time.time",
        // 	value: Time.time.toString()
        // })
        // Debug.trackValue({
        // 	label: "Max > Time",
        // 	value: this.getMaxJumpTime() > Time.time
        // })
        // Debug.trackValue({
        // 	label: "pressedSpace",
        // 	value: this.pressedSpace.toString()
        // })
    };
    return Player;
}(dist_1.GameObject));
exports.Player = Player;
//# sourceMappingURL=Player.js.map