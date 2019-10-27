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
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super.call(this) || this;
        // GameObject overrides
        _this.arrangement = [];
        _this.layer = 1;
        // class speicific
        _this.innerColor = '#aaaaaa';
        _this.outerColor = '#000000';
        _this.movingDown = true;
        return _this;
    }
    // overriding GameObject's update()
    Piece.prototype.update = function () {
        this.transform.position.y += 0.1;
    };
    Piece.prototype.draw = function () {
        for (var i = 0; i < this.arrangement.length; i++) {
            for (var j = 0; j < this.arrangement[i].length; j++) {
                if (!this.arrangement[i][j])
                    continue;
                var t = this.transform;
                var s = t.size.scale(this.unitSize);
                var p = t.position.scale(this.unitSize);
                p.x += j * this.unitSize;
                p.y += i * this.unitSize;
                dist_1.Canvas.strokeRect(p, s, this.outerColor, true);
                dist_1.Canvas.fillRect(p, s, this.innerColor, true);
            }
        }
    };
    return Piece;
}(dist_1.GameObject));
exports.Piece = Piece;
//# sourceMappingURL=Piece.js.map