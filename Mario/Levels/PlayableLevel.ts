import { Level, LevelParams, Vector2 } from "game-object-engine/dist";

export interface PlayableLevelParams {
	managingGameObjectClass: Function,
	backgroundColor: string,
}

export class PlayableLevel extends Level {
	constructor(params: PlayableLevelParams) {
		super(<LevelParams>{
			managingGameObjectClass: params.managingGameObjectClass,
			imageSrcs: [
				'Images/SpriteSheet.png',
				'Images/SpriteSheetTiles.png',
				'../Zelda/Images/SoldierBlue.png',
			],
			unitSize: 50,
			hudUnitSize: 25,
			backgroundColor: params.backgroundColor,
			extraViewportPadding: new Vector2(0, Infinity)
		});
	}
}
