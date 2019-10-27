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
var _1 = require("./");
var SoldierGreen = /** @class */ (function (_super) {
    __extends(SoldierGreen, _super);
    function SoldierGreen(boundarySize) {
        var _this = _super.call(this) || this;
        _this.currentAnimationName = null;
        _this.holdingMouse = false;
        _this.boundarySize = boundarySize.clone();
        _this.currentAnimationName = "walkDown";
        _this.spritesheetAnimationSet = new dist_1.SpritesheetAnimationSet({
            spritesheetAnimations: {
                "walkDown": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/SoldierGreenWalkDownSpritesheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 0), size: new dist_1.Vector2(22, 38) }),
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 38), size: new dist_1.Vector2(22, 38) }),
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 76), size: new dist_1.Vector2(22, 38) }),
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 114), size: new dist_1.Vector2(22, 38) }),
                    ],
                    msPerFrame: 200
                }),
                "walkSide": new dist_1.SpritesheetAnimation({
                    imageSrc: 'Images/SoldierGreenWalkSideSpritesheet.png',
                    transforms: [
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 0), size: new dist_1.Vector2(31, 27) }),
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 27), size: new dist_1.Vector2(31, 27) }),
                        new dist_1.Transform({ position: new dist_1.Vector2(0, 54), size: new dist_1.Vector2(31, 27) }),
                    ],
                    msPerFrame: 200
                })
            },
            startAnimationName: _this.currentAnimationName
        });
        dist_1.Input.registerMouseDown(_this, _this.mousedown);
        dist_1.Input.registerMouseUp(_this, _this.mouseup);
        _this.init();
        return _this;
    }
    // override
    SoldierGreen.prototype.update = function () {
        if (Math.random() < 0.01) {
            if (this.currentAnimationName == "walkDown") {
                this.currentAnimationName = "walkSide";
            }
            else {
                this.currentAnimationName = "walkDown";
            }
            this.spritesheetAnimationSet.currentAnimationName = this.currentAnimationName;
        }
        this.handleMovement();
        if (this.holdingMouse) {
            this.speedX = 0;
            this.speedY = 0;
            this.transform.position = dist_1.Input.getWorldspaceMousePosition();
        }
        else if (this.speedX == 0) {
            this.setRandomDirection();
        }
        this.transform.rotation += this.dr;
    };
    SoldierGreen.prototype.mousedown = function (coords, gameObjects) {
        for (var _i = 0, gameObjects_1 = gameObjects; _i < gameObjects_1.length; _i++) {
            var obj = gameObjects_1[_i];
            if (obj == this) {
                this.holdingMouse = true;
            }
        }
    };
    SoldierGreen.prototype.mouseup = function (coords, gameObjects) {
        this.holdingMouse = false;
    };
    SoldierGreen.prototype.onCollisionEnter = function (other) {
        // greens destroy blues
        if (other.constructor == _1.SoldierBlue) {
            dist_1.GameManager.destroy(other);
            return;
        }
        // greens bounce off of other greens
        var overlapX = Math.abs(this.transform.position.x - other.transform.position.x + other.transform.size.x);
        var overlapY = Math.abs(this.transform.position.y - other.transform.position.y + other.transform.size.y);
        if (overlapX > overlapY) {
            this.speedY *= -1;
        }
        else {
            this.speedX *= -1;
        }
    };
    return SoldierGreen;
}(_1.Soldier));
exports.SoldierGreen = SoldierGreen;
//# sourceMappingURL=SoldierGreen.js.map