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
var Soldier = /** @class */ (function (_super) {
    __extends(Soldier, _super);
    function Soldier() {
        var _this = _super.call(this, {
            layer: 1,
        }) || this;
        _this.speedX = 0;
        _this.speedY = 0;
        _this.dr = Math.random() / 10;
        return _this;
    }
    Soldier.prototype.init = function () {
        this.setRandomDirection();
        this.transform.size = new dist_1.Vector2(0.75, 1).scale(1 + Math.random());
        this.transform.position = new dist_1.Vector2(Math.random() * (this.boundarySize.x - this.transform.size.x), Math.random() * (this.boundarySize.y - this.transform.size.y));
        this.setDefaultCollider();
    };
    // override
    Soldier.prototype.update = function () {
        this.handleMovement();
        this.transform.rotation += this.dr;
    };
    Soldier.prototype.setRandomDirection = function () {
        this.speedX = (-0.5 + Math.random()) / 500;
        this.speedY = (-0.5 + Math.random()) / 500;
    };
    Soldier.prototype.handleMovement = function () {
        var p = this.transform.position;
        var s = this.transform.size;
        p.x += this.speedX * dist_1.Time.deltaTime;
        p.y += this.speedY * dist_1.Time.deltaTime;
        // left
        if (p.x < 0) {
            this.speedX *= -1;
            p.x = 0;
        }
        // top
        if (p.y < 0) {
            this.speedY *= -1;
            p.y = 0;
        }
        if (this.boundarySize) {
            // right
            if (p.x > this.boundarySize.x - s.x) {
                this.speedX *= -1;
                p.x = this.boundarySize.x - s.x;
            }
            // bottom
            if (p.y > this.boundarySize.y - s.y) {
                this.speedY *= -1;
                p.y = this.boundarySize.y - s.y;
            }
        }
    };
    return Soldier;
}(dist_1.GameObject));
exports.Soldier = Soldier;
//# sourceMappingURL=Soldier.js.map