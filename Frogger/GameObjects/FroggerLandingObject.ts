class FroggerLandingObject extends GameObject {
	constructor(name: string) {
		super({layer: 1, name: name});
		this.setDefaultCollider();
	}
}
