class Grid extends GameObject {
    constructor() {
        super();
        // override
        this.layer = 0;
        this.gridPieces = [];
        let t = this.transform;
        t.size = new Vector2(11, 18);
        GameManager.camera.follow(this);
        for (let i = 0; i < this.transform.size.y; i++) {
            this.gridPieces.push([]);
            for (let j = 0; j < this.transform.size.x; j++) {
                let gridPiece = new GameObject({
                    layer: 1,
                    shape: 'rectangle',
                    shapeStrokeStyle: "#aaaaaa",
                    shapeFillStyle: "#000000"
                });
                gridPiece.transform.position = new Vector2(j - t.size.x / 2, i - t.size.y / 2);
                this.gridPieces[i].push(gridPiece);
            }
        }
    }
    // override
    update() {
    }
    // override
    draw() {
    }
}
//# sourceMappingURL=Grid.js.map