import { Level, LevelParams } from "game-object-engine/dist";
import { MainLevelController } from "./";

export class MainLevel extends Level {
	constructor() {
		super(<LevelParams>{
			managingGameObjectClass: MainLevelController,
			imageSrcs: [
				'Images/FroggerSpritesheet.png',
			],
			// extraViewportPadding: new Vector2(GameManager.options.screenWidth*2, GameManager.options.screenHeight*2),
			unitSize: 100,
		});
	}
}
