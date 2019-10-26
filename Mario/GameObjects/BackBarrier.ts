class BackBarrier extends GameObject {

	constructor() {
		super();
		this.collider = new RectCollider({
			position: new Vector2(-8.35, 0),
			size: new Vector2(1, 20),
			allowPassThroughWhitelist: [MarioGameTile]
		});

		this.init();
	}

	public init(): void {
		this.transform.position.y = 9;
		this.transform.position.x = 7.5;
		GameManager.camera.follow(this);
	}

	public update(): void {
		let player = (<MarioLevelController> GameManager.currentLevel.managingGameObject).player;
		// follow player any time he is farther than the center of the screen
		if (player.transform.position.x > this.transform.position.x) {
			this.transform.position.x = player.transform.position.x;
		}

		if (this.currentCollidingObjects.indexOf(player) >= 0) {
			player.transform.position.x = this.transform.position.x - 7.35;
			player.velocity.x = 0;
		}
	}
}
