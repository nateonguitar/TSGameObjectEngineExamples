import { GameManager, Vector2, Level, LevelParams } from "game-object-engine/dist";
import { OverworldController } from "./OverworldController";


export class OverworldLevel extends Level {
	constructor() {
		super(<LevelParams>{
			managingGameObjectClass: OverworldController,
			imageSrcs: [
				'Images/Link.png',
				'Images/Overworld.png',
				'Images/SoldierBlue.png',
				'Images/SoldierGreenWalkDownSpritesheet.png',
				'Images/SoldierGreenWalkSideSpritesheet.png',
			],
			// allow half the viewport size around the viewport to update off screen
			extraViewportPadding: new Vector2(GameManager.options.screenWidth, GameManager.options.screenHeight).scale(0.5)
		});
	}
}
