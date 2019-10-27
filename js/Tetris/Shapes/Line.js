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
var Piece_1 = require("./Piece");
// Piece extends GameObject
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        var _this = _super.call(this) || this;
        _this.outerColor = '#0000FF';
        _this.innerColor = '#bcd6ff';
        _this.arrangement = [
            [true],
            [true],
            [true],
            [true],
        ];
        _this.arrangement = [
            [true],
            [true],
            [true],
            [true],
        ];
        return _this;
    }
    return Line;
}(Piece_1.Piece));
exports.Line = Line;
//# sourceMappingURL=Line.js.map