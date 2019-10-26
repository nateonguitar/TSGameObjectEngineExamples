interface MarioGameTileParams {
	hasCollider: boolean;
	breakFromBeneath: boolean;
	allowPassThrough: boolean;
	spritesheetAnimationSet: SpritesheetAnimationSet;
}

class MarioGameTile extends GameObject {
	protected static spriteSheet: string = 'Images/SpriteSheetTiles.png';
	protected static spriteSize: Vector2 = new Vector2(16, 16);

	public breakFromBeneath: boolean;

	constructor(params:MarioGameTileParams) {
		super({ layer: 1 });
		this.setDefaultCollider();
		if (params.hasCollider) {
			this.collider.allowPassThroughWhitelist = [BackBarrier];
			if (params.allowPassThrough) {
				this.collider.allowPassThroughWhitelist.push(MarioPlayer);
			}
			this.breakFromBeneath = params.breakFromBeneath;
		}
		this.spritesheetAnimationSet = params.spritesheetAnimationSet;

		Input.registerMouseDown(this, this.mousedown);
	}

	private mousedown(coords:Vector2, gameObjects:GameObject[]): void {
		for (let obj of gameObjects) {
			if (obj == this) {
				let manager = <MarioLevelController> GameManager.currentLevel.managingGameObject;
				manager.destroyTile(this);
			}
		}
	}

	/** override if you want other behavior */
	public onHitFromBeneath(): void {
		let manager = <MarioLevelController> GameManager.currentLevel.managingGameObject;
		if (this.breakFromBeneath) {
			manager.destroyTile(this);
		}
	}
}
