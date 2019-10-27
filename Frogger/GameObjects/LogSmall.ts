import {
	Vector2,
	SpritesheetAnimationSet,
	SpritesheetAnimation,
	Transform
} from "game-object-engine/dist";
import { LandingObject } from ".";

export class LogSmall extends LandingObject {
	constructor(name: string) {
		super(name);
		let spriteStartPoint = new Vector2(389, 258);
		let spriteSize = new Vector2(183, 57);
		this.spritesheetAnimationSet = new SpritesheetAnimationSet({
			spritesheetAnimations: {
				"idle":	new SpritesheetAnimation({
					imageSrc: 'Images/FroggerSpritesheet.png',
					transforms: [
						new Transform({ position: spriteStartPoint, size: spriteSize })
					],
					msPerFrame: 10000,
					loop: false
				}),
			},
			startAnimationName: "idle"
		});
		this.transform.size.x = 2;
		this.collider.allowPassThroughWhitelist = [];
	}
}
