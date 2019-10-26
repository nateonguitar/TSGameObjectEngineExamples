interface MarioLevelControllerParams {
	tileFlags?: string[][];
}

class MarioLevelController extends GameObject {

	protected backBarrier: BackBarrier;
	public player: MarioPlayer;


	// first level example image: https://www.spriters-resource.com/fullview/20592/
	protected tileFlags: string[][] = [
		['rb', 'rb'],
		['rb', 'rb'],
		['rb', 'rb'],
		['rb', 'rb'],
		['rb', 'rb'],
		['rb', 'rb', 'hlg',   '',   '', '?'],
		['rb', 'rb', 'hcslg', 'htg'],
		['rb', 'rb', 'hrg'],
		['rb', 'rb', '', '', '', '',    '', '', '', 'cbl', 'ctl'],
		['rb', 'rb', '', '', '', 'btb', '', '', '', 'cb',  'ct'],
		['rb', 'rb', '', '', '', '?',   '', '', '', 'cbr', 'ctr'],
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

	protected flagMap: any = {
		''      : null,
		'?'     : MarioGameTileQuestionMark,
		'bb'    : MarioGameTileBricksBrown,
		'btb'   : MarioGameTileBricksTopBrown,
		'cbl'   : MarioGameTileCloudBottomLeft,
		'cb'    : MarioGameTileCloudBottom,
		'cbr'   : MarioGameTileCloudBottomRight,
		'ctl'   : MarioGameTileCloudTopLeft,
		'ct'    : MarioGameTileCloudTop,
		'ctr'   : MarioGameTileCloudTopRight,
		'hcg'   : MarioGameTileHillCenterGreen,
		'hcslg' : MarioGameTileHillCenterSpotsLeftGreen,
		'hcsrg' : MarioGameTileHillCenterSpotsRightGreen,
		'hlg'   : MarioGameTileHillLeftGreen,
		'hrg'   : MarioGameTileHillRightGreen,
		'htg'   : MarioGameTileHillTopGreen,
		'rb'    : MarioGameTileRocksBrown,
		'tbl'   : MarioGameTileTubeBottomLeft,
		'tbr'   : MarioGameTileTubeBottomRight,
		'ttl'   : MarioGameTileTubeTopLeft,
		'ttr'   : MarioGameTileTubeTopRight
	};

	protected tiles: MarioGameTile[][] = [];

	constructor(params:MarioLevelControllerParams) {
		super({layer: 0});
		if (params.tileFlags) {
			this.tileFlags = params.tileFlags;
		}
		else {
			console.warn("Warning: Using default level tiles.  You need to pass tileFlags into the MarioLevel super() call");
		}
		this.backBarrier = new BackBarrier();
		this.player = new MarioPlayer();
		Debug.trackGameObject(this.player);
		this.buildLevel();
	}

	public destroyTile(tile: MarioGameTile): void {
		let index = this.getIndexOfTile(tile);
		if (!index.equals(new Vector2(-1, -1))) {
			GameManager.destroy(tile);
			this.tiles[index.x][index.y] = null;
		}
	}

	private getIndexOfTile(tile: MarioGameTile): Vector2 {
		let index = new Vector2(-1, -1);
		for (let i=0; i<this.tiles.length; i++) {
			let row = this.tiles[i];
			for (let j=0; j<row.length; j++) {
				if (row[j] == tile) {
					index.x = i;
					index.y = j;
				}
			}
		}
		return index;
	}

	public replaceTile(tile: MarioGameTile, TileClass: any): void {
		let newTile = new TileClass();
		if (newTile instanceof MarioGameTile) {
			let index = this.getIndexOfTile(tile);
			newTile.transform.position = tile.transform.position.clone();
			this.destroyTile(tile);
			this.tiles[index.x][index.y] = newTile;
		}
	}

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
	public buildLevel(): void {
		this.backBarrier.init();
		this.player.init();
		this.buildHud();

		// build tiles
		for (let i=0; i<this.tileFlags.length; i++) {
			// create empty row if it doesn't exist already
			if (!this.tiles[i]) {
				this.tiles[i] = [];
			}
			let tileRow = this.tiles[i];

			// fill row with tiles from flags
			let flagRow = this.tileFlags[i];
			for(let j=0; j<flagRow.length; j++) {
				let flag = flagRow[j];

				let TileClass = this.flagMap[flag];

				// add null if its not already there
				if (TileClass === null && tileRow[j] !== null) {
					tileRow[j] = null;
				}
				else if (TileClass === undefined) {
					console.warn("Flag '" + flag + "' does not match a known tile type.");
				}
				else if (!tileRow[j] && TileClass !== null) {
					let tile = new TileClass();
					this.positionTile(tile, i, j);
					this.tiles[i][j] = tile;
				}
				else if (tileRow[j] && TileClass && !(tileRow[j] instanceof TileClass)) {
					this.replaceTile(tileRow[j], TileClass);
				}
			}
		}
	}

	private buildHud(): void {
		let size = new Vector2(5, 1);
		let yOffset = -11;
		if (!MarioData.hud) {
			MarioData.hud = {
				panel: new HudGameObject({
					gameObjectParams: {
						shape: 'rectangle',
						shapeFillStyle: 'rgba(0, 0, 0, 0.2)',
						transform: new Transform({
							position: new Vector2(0, yOffset - 0.5),
							size: new Vector2(GameManager.screenSize.x / GameManager.hudUnitSize, 2)
						})
					}
				}),
				score: new HudGameObject({
					gameObjectParams: {
						textColor: "#FFFFFF",
						text: MarioData.score.toString(),
						textBold: true,
						transform: new Transform({ position: new Vector2(-13, yOffset), size: size })
					}
				}),
				lives: new HudGameObject({
					gameObjectParams: {
						textColor: "#FFFFFF",
						text: 'Lives ' + MarioData.lives.toString(),
						textBold: true,
						transform: new Transform({ position: new Vector2(-7, yOffset), size: size })
					}
				}),
				coins: new HudGameObject({
					gameObjectParams: {
						textColor: "#FFFFFF",
						text: "Coins " + MarioData.coins.toString(),
						textBold: true,
						transform: new Transform({ position: new Vector2(-1, yOffset), size: size })
					}
				}),
				level: new HudGameObject({
					gameObjectParams: {
						textColor: "#FFFFFF",
						text: 'Level ' + MarioData.world.toString() + '-' + MarioData.level.toString(),
						textBold: true,
						transform: new Transform({ position: new Vector2(6, yOffset), size: size })
					}
				}),
				time: new HudGameObject({
					gameObjectParams: {
						textColor: "#FFFFFF",
						text: 'Time ' + MarioData.time.toString(),
						textBold: true,
						transform: new Transform({ position: new Vector2(13, yOffset), size: size })
					}
				}),
			};
		}
	}

	private positionTile(tile:MarioGameTile, i:number, j:number): void {
		tile.transform.position.x = i;
		tile.transform.position.y = 15 - j;
	}



	protected handleCameraZoom(): void {
		if (Input.keys(Keys.Key1) && GameManager.unitSize > 5) {
			GameManager.currentLevel.unitSize -= 0.5;
		}
		if (Input.keys(Keys.Key2) && GameManager.unitSize < 500) {
			GameManager.currentLevel.unitSize += 0.5;
		}
	}
}
