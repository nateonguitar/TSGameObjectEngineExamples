class ZeldaOverworldController extends GameObject {
	private player: ZeldaPlayer = null;
	private background: ZeldaOverworldBackground = null;

	private enemies: ZeldaSoldier[] = [];

	constructor() {
		super({
			layer: 0
		});

		let boundarySize = new Vector2(60, 60);

		this.background = new ZeldaOverworldBackground(boundarySize);
		Debug.trackGameObject(this.background);

		this.player = new ZeldaPlayer(boundarySize);

		// move player position to center of map
		this.player.transform.position = this.background.transform.position.clone();
		Debug.trackGameObject(this.player);

		// put the camera on top of the player (in case you want to test removing the player from the camera)
		GameManager.camera.worldspacePosition = this.player.transform.position;

		// camera follow
		GameManager.camera.follow(this.player);

		for (let i=0; i<50; i++) {
			this.enemies.push(new ZeldaSoldierGreen(boundarySize));
			this.enemies.push(new ZeldaSoldierBlue(boundarySize));
			this.enemies.push(new ZeldaSoldierBlue(boundarySize));
			this.enemies.push(new ZeldaSoldierBlue(boundarySize));
		}

	}

	public update() {
		if (Input.keys(Keys.Key1) && GameManager.unitSize > 5) {
			GameManager.currentLevel.unitSize -= 0.5;
		}
		if (Input.keys(Keys.Key2) && GameManager.unitSize < 500) {
			GameManager.currentLevel.unitSize += 0.5;
		}
	}
}
