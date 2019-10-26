class MarioGameTileQuestionMark extends MarioGameTile {

	private spent: boolean = false;
	private flashing: boolean = false;

	private idleDuration = 2000;
	private idleStartTime = 0;

	private flashDuration = 400;
	private flashStartTime = 0;

	constructor() {
		super({
			hasCollider: true,
			allowPassThrough: false,
			breakFromBeneath: false,
			spritesheetAnimationSet: new SpritesheetAnimationSet({
				spritesheetAnimations: {
					"idle": new SpritesheetAnimation({
						imageSrc: MarioGameTile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(MarioGameTile.spriteSize.x * 24, 0),
								size: MarioGameTile.spriteSize
							}),
						],
						msPerFrame: 10000,
						loop: false
					}),
					"flash": new SpritesheetAnimation({
						imageSrc: MarioGameTile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(MarioGameTile.spriteSize.x * 25, 0),
								size: MarioGameTile.spriteSize
							}),
							new Transform({
								position: new Vector2(MarioGameTile.spriteSize.x * 26, 0),
								size: MarioGameTile.spriteSize
							}),
							new Transform({
								position: new Vector2(MarioGameTile.spriteSize.x * 24, 0),
								size: MarioGameTile.spriteSize
							}),
						],
						msPerFrame: 200,
						loop: false
					}),
					"spent": new SpritesheetAnimation({
						imageSrc: MarioGameTile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(MarioGameTile.spriteSize.x * 3, 0),
								size: MarioGameTile.spriteSize
							})
						],
						msPerFrame: 10000,
						loop: false
					}),
				},
				startAnimationName: "idle"
			})
		});
		this.idleStartTime = Time.time;
	}

	update(): void {
		if (!this.spent) {
			if (this.flashing) {
				if (this.flashStartTime + this.flashDuration <= Time.time) {
					this.flashing = false;
					this.spritesheetAnimationSet.currentAnimationName = "idle";
					this.idleStartTime = Time.time;
				}
			}
			else {
				if (this.idleStartTime + this.idleDuration <= Time.time) {
					this.flashing = true;
					this.spritesheetAnimationSet.currentAnimationName = "flash";
					this.flashStartTime = Time.time;
				}
			}
		}
	}

	// override
	public onHitFromBeneath(): void {
		if (!this.spent) {
			this.spent = true;
			MarioData.coins++;
			if (MarioData.coins >= 100) {
				MarioData.coins = 0;
				MarioData.lives++;
				MarioData.hud.lives.text = "Lives " + MarioData.lives.toString();
			}
			MarioData.hud.coins.text = "Coins " + MarioData.coins.toString();
			this.spritesheetAnimationSet.currentAnimationName = "spent";
		}

	}
}
