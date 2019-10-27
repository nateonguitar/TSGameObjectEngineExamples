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
var Tiles_1 = require("../GameObjects/Tiles");
var Player_1 = require("../GameObjects/Player");
var Data_1 = require("../Data");
var BackBarrier_1 = require("../GameObjects/BackBarrier");
var LevelController = /** @class */ (function (_super) {
    __extends(LevelController, _super);
    function LevelController(params) {
        var _this = _super.call(this, { layer: 0 }) || this;
        // first level example image: https://www.spriters-resource.com/fullview/20592/
        _this.tileFlags = [
            ['rb', 'rb'],
            ['rb', 'rb'],
            ['rb', 'rb'],
            ['rb', 'rb'],
            ['rb', 'rb'],
            ['rb', 'rb', 'hlg', '', '', '?'],
            ['rb', 'rb', 'hcslg', 'htg'],
            ['rb', 'rb', 'hrg'],
            ['rb', 'rb', '', '', '', '', '', '', '', 'cbl', 'ctl'],
            ['rb', 'rb', '', '', '', 'btb', '', '', '', 'cb', 'ct'],
            ['rb', 'rb', '', '', '', '?', '', '', '', 'cbr', 'ctr'],
            ['rb', 'rb', '', '', '', 'btb', '', '', '?'],
            ['rb', 'rb', '', '', '', '?'],
            ['rb', 'rb', '', '', '', 'btb'],
            ['rb', 'rb'],
            ['rb', 'rb'],
            ['rb', 'rb'],
            ['rb', 'rb', 'tbl', 'ttl'],
            ['rb', 'rb', 'tbr', 'ttr'],
            ['rb', 'rb'],
            ['rb', 'rb'],
            ['rb', 'rb'],
        ];
        _this.flagMap = {
            '': null,
            '?': Tiles_1.TileQuestionMark,
            'bb': Tiles_1.TileBricksBrown,
            'btb': Tiles_1.TileBricksTopBrown,
            'cbl': Tiles_1.TileCloudBottomLeft,
            'cb': Tiles_1.TileCloudBottom,
            'cbr': Tiles_1.TileCloudBottomRight,
            'ctl': Tiles_1.TileCloudTopLeft,
            'ct': Tiles_1.TileCloudTop,
            'ctr': Tiles_1.TileCloudTopRight,
            'hcg': Tiles_1.TileHillCenterGreen,
            'hcslg': Tiles_1.TileHillCenterSpotsLeftGreen,
            'hcsrg': Tiles_1.TileHillCenterSpotsRightGreen,
            'hlg': Tiles_1.TileHillLeftGreen,
            'hrg': Tiles_1.TileHillRightGreen,
            'htg': Tiles_1.TileHillTopGreen,
            'rb': Tiles_1.TileRocksBrown,
            'tbl': Tiles_1.TileTubeBottomLeft,
            'tbr': Tiles_1.TileTubeBottomRight,
            'ttl': Tiles_1.TileTubeTopLeft,
            'ttr': Tiles_1.TileTubeTopRight
        };
        _this.tiles = [];
        if (params.tileFlags) {
            _this.tileFlags = params.tileFlags;
        }
        else {
            console.warn("Warning: Using default level tiles.  You need to pass tileFlags into the MarioLevel super() call");
        }
        _this.backBarrier = new BackBarrier_1.BackBarrier();
        _this.player = new Player_1.Player();
        dist_1.Debug.trackGameObject(_this.player);
        _this.buildLevel();
        return _this;
    }
    LevelController.prototype.destroyTile = function (tile) {
        var index = this.getIndexOfTile(tile);
        if (!index.equals(new dist_1.Vector2(-1, -1))) {
            dist_1.GameManager.destroy(tile);
            this.tiles[index.x][index.y] = null;
        }
    };
    LevelController.prototype.getIndexOfTile = function (tile) {
        var index = new dist_1.Vector2(-1, -1);
        for (var i = 0; i < this.tiles.length; i++) {
            var row = this.tiles[i];
            for (var j = 0; j < row.length; j++) {
                if (row[j] == tile) {
                    index.x = i;
                    index.y = j;
                }
            }
        }
        return index;
    };
    LevelController.prototype.replaceTile = function (tile, TileClass) {
        var newTile = new TileClass();
        if (newTile instanceof Tiles_1.Tile) {
            var index = this.getIndexOfTile(tile);
            newTile.transform.position = tile.transform.position.clone();
            this.destroyTile(tile);
            this.tiles[index.x][index.y] = newTile;
        }
    };
    /**
     * Uses `tileFlags`, a 2d array of strings, to build the level.
     * Remember, the original mario has 15 tiles vertically,
     * but we'll build the level at a 90 degree angle.
     *
     * The `tileFlags` list (which you should override in each level) defaults to the start
     * of the first level of the original mario.
     *
     * If called after level is already built it will replace any tiles that have been destroyed.
     */
    LevelController.prototype.buildLevel = function () {
        this.backBarrier.init();
        this.player.init();
        this.buildHud();
        // build tiles
        for (var i = 0; i < this.tileFlags.length; i++) {
            // create empty row if it doesn't exist already
            if (!this.tiles[i]) {
                this.tiles[i] = [];
            }
            var tileRow = this.tiles[i];
            // fill row with tiles from flags
            var flagRow = this.tileFlags[i];
            for (var j = 0; j < flagRow.length; j++) {
                var flag = flagRow[j];
                var TileClass = this.flagMap[flag];
                // add null if its not already there
                if (TileClass === null && tileRow[j] !== null) {
                    tileRow[j] = null;
                }
                else if (TileClass === undefined) {
                    console.warn("Flag '" + flag + "' does not match a known tile type.");
                }
                else if (!tileRow[j] && TileClass !== null) {
                    var tile = new TileClass();
                    this.positionTile(tile, i, j);
                    this.tiles[i][j] = tile;
                }
                else if (tileRow[j] && TileClass && !(tileRow[j] instanceof TileClass)) {
                    this.replaceTile(tileRow[j], TileClass);
                }
            }
        }
    };
    LevelController.prototype.buildHud = function () {
        var size = new dist_1.Vector2(5, 1);
        var yOffset = -11;
        if (!Data_1.Data.hud) {
            Data_1.Data.hud = {
                panel: new dist_1.HudGameObject({
                    gameObjectParams: {
                        shape: 'rectangle',
                        shapeFillStyle: 'rgba(0, 0, 0, 0.2)',
                        transform: new dist_1.Transform({
                            position: new dist_1.Vector2(0, yOffset - 0.5),
                            size: new dist_1.Vector2(dist_1.GameManager.screenSize.x / dist_1.GameManager.hudUnitSize, 2)
                        })
                    }
                }),
                score: new dist_1.HudGameObject({
                    gameObjectParams: {
                        textColor: "#FFFFFF",
                        text: Data_1.Data.score.toString(),
                        textBold: true,
                        transform: new dist_1.Transform({ position: new dist_1.Vector2(-13, yOffset), size: size })
                    }
                }),
                lives: new dist_1.HudGameObject({
                    gameObjectParams: {
                        textColor: "#FFFFFF",
                        text: 'Lives ' + Data_1.Data.lives.toString(),
                        textBold: true,
                        transform: new dist_1.Transform({ position: new dist_1.Vector2(-7, yOffset), size: size })
                    }
                }),
                coins: new dist_1.HudGameObject({
                    gameObjectParams: {
                        textColor: "#FFFFFF",
                        text: "Coins " + Data_1.Data.coins.toString(),
                        textBold: true,
                        transform: new dist_1.Transform({ position: new dist_1.Vector2(-1, yOffset), size: size })
                    }
                }),
                level: new dist_1.HudGameObject({
                    gameObjectParams: {
                        textColor: "#FFFFFF",
                        text: 'Level ' + Data_1.Data.world.toString() + '-' + Data_1.Data.level.toString(),
                        textBold: true,
                        transform: new dist_1.Transform({ position: new dist_1.Vector2(6, yOffset), size: size })
                    }
                }),
                time: new dist_1.HudGameObject({
                    gameObjectParams: {
                        textColor: "#FFFFFF",
                        text: 'Time ' + Data_1.Data.time.toString(),
                        textBold: true,
                        transform: new dist_1.Transform({ position: new dist_1.Vector2(13, yOffset), size: size })
                    }
                }),
            };
        }
    };
    LevelController.prototype.positionTile = function (tile, i, j) {
        tile.transform.position.x = i;
        tile.transform.position.y = 15 - j;
    };
    LevelController.prototype.handleCameraZoom = function () {
        if (dist_1.Input.keys(dist_1.Keys.Key1) && dist_1.GameManager.unitSize > 5) {
            dist_1.GameManager.currentLevel.unitSize -= 0.5;
        }
        if (dist_1.Input.keys(dist_1.Keys.Key2) && dist_1.GameManager.unitSize < 500) {
            dist_1.GameManager.currentLevel.unitSize += 0.5;
        }
    };
    return LevelController;
}(dist_1.GameObject));
exports.LevelController = LevelController;
//# sourceMappingURL=LevelController.js.map