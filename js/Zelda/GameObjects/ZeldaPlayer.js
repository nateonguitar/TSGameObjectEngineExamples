class ZeldaPlayer extends GameObject {
    constructor(boundarySize) {
        super({
            layer: 2,
            imageSrc: "Images/Link.png",
            name: "player"
        });
        this.speed = 0.1;
        this.boundarySize = null;
        this.holdingMouse = false;
        this.boundarySize = boundarySize;
        this.transform.size = new Vector2(0.75, 1);
        this.setDefaultCollider();
        Input.registerMouseDown(this, this.mousedown);
        Input.registerMouseUp(this, this.mouseup);
    }
    // override
    update() {
        this.handleMovement();
        if (this.holdingMouse) {
            // console.log(this.transform.position);
        }
        if (Input.keys(Keys.Space)) {
            console.log("keys.space");
        }
    }
    handleMovement() {
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
    mousedown(coords, gameObjects) {
        for (let obj of gameObjects) {
            if (obj == this) {
                this.holdingMouse = true;
            }
        }
    }
    mouseup(coords, gameObjects) {
        this.holdingMouse = false;
    }
    onCollisionEnter(other) {
    }
}
//# sourceMappingURL=ZeldaPlayer.js.map