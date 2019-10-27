import { GameObject } from "game-object-engine/dist";

export class LandingObject extends GameObject {
	constructor(name: string) {
		super({layer: 1, name: name});
		this.setDefaultCollider();
	}
}
