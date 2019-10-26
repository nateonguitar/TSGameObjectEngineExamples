class FroggerRiver extends GameObject {
    constructor() {
        super({ layer: 0 });
        this.blue = "#003388";
        this.darkBlue = "#002244";
        this.topBank = null;
        this.bottomBank = null;
        this.transform.size = new Vector2(16, 16);
        this.topBank = new FroggerRiverBank();
        this.bottomBank = new FroggerRiverBank();
        this.topBank.transform.position.y = -this.transform.size.y / 2 + 0.5;
        this.bottomBank.transform.position.y = this.transform.size.y / 2 - 0.5;
    }
    draw() {
        let t = this.transform;
        let p = t.position.scale(this.unitSize);
        let s = t.size.scale(this.unitSize);
        // draw river water
        Canvas.fillRect(p, s, this.blue, true);
        // draw separator lines
        for (let i = -s.y / 2; i < s.y / 2; i += this.unitSize) {
            Canvas.fillRect(new Vector2(0, i), new Vector2(s.x, 1), this.darkBlue, true);
        }
    }
}
//# sourceMappingURL=FroggerRiver.js.map