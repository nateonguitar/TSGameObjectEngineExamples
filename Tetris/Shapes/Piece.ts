class Piece extends GameObject {

	// GameObject overrides
	public arrangement: boolean[][] = [];
	public layer: number = 1;

	// class speicific
	protected innerColor: string = '#aaaaaa';
	protected outerColor: string = '#000000';
	protected movingDown: boolean = true;

	constructor() {
		super();
	}

	// overriding GameObject's update()
	public update(): void {
		this.transform.position.y += 0.1;
	}

	public draw(): void {
		for (let i = 0; i < this.arrangement.length; i++) {
			for (let j = 0; j < this.arrangement[i].length; j++) {
				if (!this.arrangement[i][j]) continue;
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
