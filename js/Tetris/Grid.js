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
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        var _this = _super.call(this) || this;
        // override
        _this.layer = 0;
        _this.gridPieces = [];
        var t = _this.transform;
        t.size = new dist_1.Vector2(11, 18);
        dist_1.GameManager.camera.follow(_this);
        for (var i = 0; i < _this.transform.size.y; i++) {
            _this.gridPieces.push([]);
            for (var j = 0; j < _this.transform.size.x; j++) {
                var gridPiece = new dist_1.GameObject({
                    layer: 1,
                    shape: 'rectangle',
                    shapeStrokeStyle: "#aaaaaa",
                    shapeFillStyle: "#000000"
                });
                gridPiece.transform.position = new dist_1.Vector2(j - t.size.x / 2, i - t.size.y / 2);
                _this.gridPieces[i].push(gridPiece);
            }
        }
        return _this;
    }
    // override
    Grid.prototype.update = function () {
    };
    // override
    Grid.prototype.draw = function () {
    };
    return Grid;
}(dist_1.GameObject));
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map