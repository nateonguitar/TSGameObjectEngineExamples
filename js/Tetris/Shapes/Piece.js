class Piece extends GameObject {
    constructor() {
        super();
        // GameObject overrides
        this.arrangement = [];
        this.layer = 1;
        // class speicific
        this.innerColor = '#aaaaaa';
        this.outerColor = '#000000';
        this.movingDown = true;
    }
    // overriding GameObject's update()
    update() {
        this.transform.position.y += 0.1;
    }
    draw() {
        for (let i = 0; i < this.arrangement.length; i++) {
            for (let j = 0; j < this.arrangement[i].length; j++) {
                if (!this.arrangement[i][j])
                    continue;
                let t = this.transform;
                let s = t.size.scale(this.unitSize);
                let p = t.position.scale(this.unitSize);
                p.x += j * this.unitSize;
                p.y += i * this.unitSize;
                Canvas.strokeRect(p, s, this.outerColor, true);
                Canvas.fillRect(p, s, this.innerColor, true);
            }
        }
    }
}
//# sourceMappingURL=Piece.js.map