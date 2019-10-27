import { Vector2, SpritesheetAnimationSet, SpritesheetAnimation, Transform } from "game-object-engine/dist";

import { Tile } from ".";

export class TileBricksBrown extends Tile {
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
								position: new Vector2(Tile.spriteSize.x*2, 0),
								size: Tile.spriteSize
							})
						],
						msPerFrame: 10000,
						loop: false
					}),
				},
				startAnimationName: "idle",
			})
		});
	}
}
