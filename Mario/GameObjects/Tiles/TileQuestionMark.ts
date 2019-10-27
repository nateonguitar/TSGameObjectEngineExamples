import { Tile } from ".";
import {
	SpritesheetAnimationSet,
	SpritesheetAnimation,
	Transform,
	Vector2,
	Time
} from "game-object-engine/dist";
import { Data } from "../../Data";

export class TileQuestionMark extends Tile {

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
						imageSrc: Tile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(Tile.spriteSize.x * 24, 0),
								size: Tile.spriteSize
							}),
						],
						msPerFrame: 10000,
						loop: false
					}),
					"flash": new SpritesheetAnimation({
						imageSrc: Tile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(Tile.spriteSize.x * 25, 0),
								size: Tile.spriteSize
							}),
							new Transform({
								position: new Vector2(Tile.spriteSize.x * 26, 0),
								size: Tile.spriteSize
							}),
							new Transform({
								position: new Vector2(Tile.spriteSize.x * 24, 0),
								size: Tile.spriteSize
							}),
						],
						msPerFrame: 200,
						loop: false
					}),
					"spent": new SpritesheetAnimation({
						imageSrc: Tile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(Tile.spriteSize.x * 3, 0),
								size: Tile.spriteSize
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
			Data.coins++;
			if (Data.coins >= 100) {
				Data.coins = 0;
				Data.lives++;
				Data.hud.lives.text = "Lives " + Data.lives.toString();
			}
			Data.hud.coins.text = "Coins " + Data.coins.toString();
			this.spritesheetAnimationSet.currentAnimationName = "spent";
		}

	}
}
