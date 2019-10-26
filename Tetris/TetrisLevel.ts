class TetrisLevel extends Level {
	constructor() {
		super(<LevelParams>{
			managingGameObjectClass: TetrisController,
			extraViewportPadding: GameManager.screenSize.scale(5),
			unitSize: 25
		});
	}
}
