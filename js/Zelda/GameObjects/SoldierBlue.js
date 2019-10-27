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
var SoldierBlue = /** @class */ (function (_super) {
    __extends(SoldierBlue, _super);
    function SoldierBlue(boundarySize) {
        var _this = _super.call(this) || this;
        _this.imageSrc = "Images/SoldierBlue.png";
        _this.boundarySize = boundarySize.clone();
        dist_1.Input.registerMouseDown(_this, _this.mousedown);
        _this.init();
        return _this;
    }
    SoldierBlue.prototype.mousedown = function (coords, gameObjects) {
        for (var _i = 0, gameObjects_1 = gameObjects; _i < gameObjects_1.length; _i++) {
            var obj = gameObjects_1[_i];
            if (obj == this) {
                this.setRandomDirection();
            }
        }
    };
    return SoldierBlue;
}(_1.Soldier));
exports.SoldierBlue = SoldierBlue;
//# sourceMappingURL=SoldierBlue.js.map