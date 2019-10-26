class ZeldaOverworldLevel extends Level {
	constructor() {
		super(<LevelParams>{
			managingGameObjectClass: ZeldaOverworldController,
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
