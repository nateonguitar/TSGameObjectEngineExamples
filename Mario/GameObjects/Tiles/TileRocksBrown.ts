import { Tile } from ".";
import {
	SpritesheetAnimationSet,
	SpritesheetAnimation,
	Transform,
	Vector2
} from "game-object-engine/dist";

export class TileRocksBrown extends Tile {
	constructor() {
		super({
			hasCollider: true,
			allowPassThrough: false,
			breakFromBeneath: false,
			spritesheetAnimationSet: new SpritesheetAnimationSet({
				spritesheetAnimations: {
					"idle":	new SpritesheetAnimation({
						imageSrc: Tile.spriteSheet,
						transforms: [
							new Transform({
								position: new Vector2(0, 0),
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
