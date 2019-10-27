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
var TetrisController_1 = require("./TetrisController");
var TetrisLevel = /** @class */ (function (_super) {
    __extends(TetrisLevel, _super);
    function TetrisLevel() {
        return _super.call(this, {
            managingGameObjectClass: TetrisController_1.TetrisController,
            extraViewportPadding: dist_1.GameManager.screenSize.scale(5),
            unitSize: 25
        }) || this;
    }
    return TetrisLevel;
}(dist_1.Level));
exports.TetrisLevel = TetrisLevel;
//# sourceMappingURL=TetrisLevel.js.map