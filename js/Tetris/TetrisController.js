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
var Cube_1 = require("./Shapes/Cube");
var Line_1 = require("./Shapes/Line");
var LL_1 = require("./Shapes/LL");
var LR_1 = require("./Shapes/LR");
var Grid_1 = require("./Grid");
var TetrisController = /** @class */ (function (_super) {
    __extends(TetrisController, _super);
    function TetrisController() {
        var _this = _super.call(this) || this;
        _this.pieceTypes = [
            Cube_1.Cube,
            Line_1.Line,
            LL_1.LL,
            LR_1.LR
        ];
        _this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        _this.currentPiece = null;
        _this.grid = null;
        _this.grid = new Grid_1.Grid();
        dist_1.Input.registerMouseDown(_this, _this.mousedown);
        return _this;
    }
    TetrisController.prototype.update = function () {
        // drop a new piece
        if (this.currentPiece == null) {
            var randomIndex = Math.floor(Math.random() * this.pieceTypes.length);
            var _Piece = this.pieceTypes[randomIndex];
            this.currentPiece = new _Piece();
            var p = new dist_1.Vector2(-Math.floor(this.currentPiece.arrangement[0].length / 2), -this.grid.transform.size.y / 2);
            if (this.grid.transform.size.x % 2 != 0) {
                p.x -= 0.5;
            }
            this.currentPiece.transform.position = p;
        }
        // control the falling piece
        if (this.currentPiece) {
            this.handleInput();
            if (this.currentPiece.transform.position.y > this.grid.transform.size.y / 2) {
                dist_1.GameManager.destroy(this.currentPiece);
            }
        }
        if (dist_1.Input.keys(dist_1.Keys.Key1) && dist_1.GameManager.unitSize > 5) {
            dist_1.GameManager.currentLevel.unitSize -= 0.5;
        }
        if (dist_1.Input.keys(dist_1.Keys.Key2) && dist_1.GameManager.unitSize < 500) {
            dist_1.GameManager.currentLevel.unitSize += 0.5;
        }
    };
    TetrisController.prototype.handleInput = function () {
        // don't allow repeat moves, have to press the button again
        // left
        if (dist_1.Input.keys(dist_1.Keys.ArrowLeft) && !this.keys.left) {
            this.keys.left = true;
            this.movePieceLeft();
        }
        if (!dist_1.Input.keys(dist_1.Keys.ArrowLeft) && this.keys.left) {
            this.keys.left = false;
        }
        // right
        if (dist_1.Input.keys(dist_1.Keys.ArrowRight) && !this.keys.right) {
            this.keys.right = true;
            this.movePieceRight();
        }
        if (!dist_1.Input.keys(dist_1.Keys.ArrowRight) && this.keys.right) {
            this.keys.right = false;
        }
    };
    TetrisController.prototype.movePieceLeft = function () {
        if (this.currentPiece) {
            if (this.currentPiece.transform.position.x > -this.grid.transform.size.x / 2) {
                this.currentPiece.transform.position.x--;
            }
        }
    };
    TetrisController.prototype.movePieceRight = function () {
        if (this.currentPiece) {
            var pieceWidth = this.currentPiece.arrangement[0].length;
            if (this.currentPiece.transform.position.x + pieceWidth < this.grid.transform.size.x / 2) {
                this.currentPiece.transform.position.x++;
            }
        }
    };
    TetrisController.prototype.mousedown = function (coords, gameObjects) {
        console.log(coords);
        console.log(gameObjects);
    };
    return TetrisController;
}(dist_1.GameObject));
exports.TetrisController = TetrisController;
//# sourceMappingURL=TetrisController.js.map