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
var _1 = require(".");
var River = /** @class */ (function (_super) {
    __extends(River, _super);
    function River() {
        var _this = _super.call(this, { layer: 0 }) || this;
        _this.blue = "#003388";
        _this.darkBlue = "#002244";
        _this.topBank = null;
        _this.bottomBank = null;
        _this.transform.size = new dist_1.Vector2(16, 16);
        _this.topBank = new _1.RiverBank();
        _this.bottomBank = new _1.RiverBank();
        _this.topBank.transform.position.y = -_this.transform.size.y / 2 + 0.5;
        _this.bottomBank.transform.position.y = _this.transform.size.y / 2 - 0.5;
        return _this;
    }
    River.prototype.draw = function () {
        var t = this.transform;
        var p = t.position.scale(this.unitSize);
        var s = t.size.scale(this.unitSize);
        // draw river water
        dist_1.Canvas.fillRect(p, s, this.blue, true);
        // draw separator lines
        for (var i = -s.y / 2; i < s.y / 2; i += this.unitSize) {
            dist_1.Canvas.fillRect(new dist_1.Vector2(0, i), new dist_1.Vector2(s.x, 1), this.darkBlue, true);
        }
    };
    return River;
}(dist_1.GameObject));
exports.River = River;
//# sourceMappingURL=River.js.map