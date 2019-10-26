class ZeldaSoldierBlue extends ZeldaSoldier {

	constructor(boundarySize:Vector2) {
		super();
		this.imageSrc = "Images/SoldierBlue.png";
		this.boundarySize = boundarySize.clone();

		Input.registerMouseDown(this, this.mousedown);

		this.init();
	}

	private mousedown(coords:Vector2, gameObjects:GameObject[]): void {
		for (let obj of gameObjects) {
			if (obj == this) {
				this.setRandomDirection();
			}
		}
	}
}
