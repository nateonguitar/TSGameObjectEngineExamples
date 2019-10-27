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
var RiverBank = /** @class */ (function (_super) {
    __extends(RiverBank, _super);
    function RiverBank() {
        var _this = _super.call(this, {
            layer: 1,
            shape: "rectangle",
            shapeFillStyle: "#654321" // brown
        }) || this;
        _this.transform.size = new dist_1.Vector2(16, 1);
        return _this;
    }
    return RiverBank;
}(dist_1.GameObject));
exports.RiverBank = RiverBank;
//# sourceMappingURL=RiverBank.js.map