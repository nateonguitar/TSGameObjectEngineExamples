import { Tile } from ".";
import {
	SpritesheetAnimationSet,
	SpritesheetAnimation,
	Transform,
	Vector2
} from "game-object-engine/dist";

export class TileBricksTopBrown extends Tile {
	constructor() {
		super({
			hasCollider: true,
			allowPassThrough: false,
			breakFromBeneath: true,
			spritesheetAnimationSet: new SpritesheetAnimationSet({
				spritesheetAnimations: {
					"idle":	new SpritesheetAnimation({
						imageSrc: Tile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(Tile.spriteSize.x, 0),
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
