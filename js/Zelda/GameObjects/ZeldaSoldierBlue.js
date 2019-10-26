class ZeldaSoldierBlue extends ZeldaSoldier {
    constructor(boundarySize) {
        super();
        this.imageSrc = "Images/SoldierBlue.png";
        this.boundarySize = boundarySize.clone();
        Input.registerMouseDown(this, this.mousedown);
        this.init();
    }
    mousedown(coords, gameObjects) {
        for (let obj of gameObjects) {
            if (obj == this) {
                this.setRandomDirection();
            }
        }
    }
}
//# sourceMappingURL=ZeldaSoldierBlue.js.map