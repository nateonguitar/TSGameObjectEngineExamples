class ZeldaPlayer extends GameObject {

	private speed = 0.1;
	private boundarySize: Vector2 = null;

	private holdingMouse: boolean = false;

	constructor(boundarySize:Vector2) {
		super({
			layer: 2,
			imageSrc: "Images/Link.png",
			name: "player"
		});

		this.boundarySize = boundarySize;
		this.transform.size = new Vector2(0.75, 1);

		this.setDefaultCollider();

		Input.registerMouseDown(this, this.mousedown);
		Input.registerMouseUp(this, this.mouseup);
	}

	// override
	public update(): void {
		this.handleMovement();
		if (this.holdingMouse) {
			// console.log(this.transform.position);
		}
		if (Input.keys(Keys.Space)) {
			console.log("keys.space")
		}
	}

	private handleMovement(): void {
		// don't allow repeat moves, have to press the button again
		// left
		let p = this.transform.position;
		if (Input.keys(Keys.ArrowLeft)) {
			p.x -= this.speed;
		}
		// right
		if (Input.keys(Keys.ArrowRight)) {
			p.x += this.speed;
		}
		// up
		if (Input.keys(Keys.ArrowUp)) {
			p.y -= this.speed;
		}
		// up
		if (Input.keys(Keys.ArrowDown)) {
			p.y += this.speed;
		}

		if (this.transform.position.x < 0) {
			this.transform.position.x = 0;
		}
		if (this.transform.position.y < 0) {
			this.transform.position.y = 0;
		}
		if (this.transform.position.x > this.boundarySize.x) {
			this.transform.position.x = this.boundarySize.x;
		}
		if (this.transform.position.y > this.boundarySize.y) {
			this.transform.position.y = this.boundarySize.y;
		}
	}

	private mousedown(coords:Vector2, gameObjects:GameObject[]): void {
		for (let obj of gameObjects) {
			if (obj == this) {
				this.holdingMouse = true;
			}
		}
	}

	private mouseup(coords:Vector2, gameObjects:GameObject[]): void {
		this.holdingMouse = false;
	}

	public onCollisionEnter(other): void {

	}
}
