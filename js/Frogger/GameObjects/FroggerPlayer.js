class FroggerPlayer extends GameObject {
    constructor() {
        super({
            layer: 2,
            name: null
        });
        this.spriteSize = new Vector2(57, 77);
        // jumping
        this.jumping = false;
        this.pressedSpace = false;
        this.jumpStartTime = 0;
        this.jumpDuration = 450;
        this.targetDestination = null;
        this.initialPosition = null;
        this.spritesheetAnimationSet = new SpritesheetAnimationSet({
            spritesheetAnimations: {
                "idle": new SpritesheetAnimation({
                    imageSrc: 'Images/FroggerSpritesheet.png',
                    transforms: [
                        new Transform({ position: new Vector2(0, 0), size: this.spriteSize })
                    ],
                    msPerFrame: 10000,
                    loop: false
                }),
                "jumping": new SpritesheetAnimation({
                    imageSrc: 'Images/FroggerSpritesheet.png',
                    transforms: [
                        new Transform({ position: new Vector2(this.spriteSize.x, 0), size: this.spriteSize }),
                        new Transform({ position: new Vector2(this.spriteSize.x * 2, 0), size: this.spriteSize }),
                        new Transform({ position: new Vector2(this.spriteSize.x * 3, 0), size: this.spriteSize }),
                        new Transform({ position: new Vector2(this.spriteSize.x * 4, 0), size: this.spriteSize }),
                        new Transform({ position: new Vector2(this.spriteSize.x * 5, 0), size: this.spriteSize }),
                        new Transform({ position: new Vector2(0, 0), size: this.spriteSize }),
                    ],
                    msPerFrame: 75,
                    loop: false
                }),
            },
            startAnimationName: "idle"
        });
        this.collider = new RectCollider({
            position: new Vector2(0, 0.1),
            size: new Vector2(0.8, 0.5)
        });
        this.transform.size.x = 0.75;
    }
    // override
    update() {
        this.handleInput();
        if (this.targetDestination) {
            this.transform.position = this.transform.position.moveTowards(this.targetDestination, 0.05);
            if (this.transform.position.equals(this.targetDestination)) {
                this.targetDestination = null;
                this.spritesheetAnimationSet.currentAnimationName = "idle";
            }
        }
        // if (this.transform.position.y < -this.initialPosition.y) {
        // 	this.targetDestination = null;
        // 	this.goToInitialPosition();
        // }
        if (this.jumping && this.jumpStartTime + this.jumpDuration <= Time.time) {
            this.jumping = false;
        }
    }
    setInitialPosition(position) {
        this.initialPosition = position;
    }
    goToInitialPosition() {
        this.transform.position = this.initialPosition.clone();
        this.spritesheetAnimationSet.currentAnimationName = "idle";
    }
    handleInput() {
        if (Input.keys(Keys.Space) && !this.jumping) {
            this.pressedSpace = true;
        }
        let speed = 0.1;
        if (Input.keys(Keys.ArrowUp)) {
            this.transform.position.y -= speed;
        }
        if (Input.keys(Keys.ArrowDown)) {
            this.transform.position.y += speed;
        }
        if (Input.keys(Keys.ArrowLeft)) {
            this.transform.position.x -= speed;
        }
        if (Input.keys(Keys.ArrowRight)) {
            this.transform.position.x += speed;
        }
        if (Input.keys(Keys.KeyA)) {
            this.transform.size.x -= speed;
        }
        if (Input.keys(Keys.KeyD)) {
            this.transform.size.x += speed;
        }
        if (Input.keys(Keys.KeyW)) {
            this.transform.size.y += speed;
        }
        if (Input.keys(Keys.KeyS)) {
            this.transform.size.y -= speed;
        }
        if (Input.keys(Keys.KeyQ)) {
            this.transform.rotation += 0.1;
        }
        if (Input.keys(Keys.KeyE)) {
            this.transform.rotation -= 0.1;
        }
        // space keyup
        if (this.pressedSpace && !Input.keys(Keys.Space)) {
            this.spritesheetAnimationSet.currentAnimationName = "jumping";
            this.pressedSpace = false;
            this.jumping = true;
            this.jumpStartTime = Time.time;
            this.targetDestination = this.transform.position.clone();
            this.targetDestination.y -= 1;
        }
    }
}
//# sourceMappingURL=FroggerPlayer.js.map