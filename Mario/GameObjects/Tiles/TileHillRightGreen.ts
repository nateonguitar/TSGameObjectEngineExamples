import { Tile } from ".";
import {
	SpritesheetAnimationSet,
	SpritesheetAnimation,
	Transform,
	Vector2
} from "game-object-engine/dist";

export class TileHillRightGreen extends Tile {
	constructor() {
		super({
			hasCollider: false,
			allowPassThrough: true,
			breakFromBeneath: false,
			spritesheetAnimationSet: new SpritesheetAnimationSet({
				spritesheetAnimations: {
					"idle":	new SpritesheetAnimation({
						imageSrc: Tile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(Tile.spriteSize.x*10, Tile.spriteSize.y*8),
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
	}
}
