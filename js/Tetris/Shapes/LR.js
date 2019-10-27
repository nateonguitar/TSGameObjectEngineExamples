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
var LR = /** @class */ (function (_super) {
    __extends(LR, _super);
    function LR() {
        var _this = _super.call(this) || this;
        _this.outerColor = '#b342f4';
        _this.innerColor = '#dca0ff';
        _this.arrangement = [
            [true, false],
            [true, false],
            [true, true],
        ];
        return _this;
    }
    return LR;
}(Piece_1.Piece));
exports.LR = LR;
//# sourceMappingURL=LR.js.map