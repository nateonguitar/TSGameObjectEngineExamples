class TetrisController extends GameObject {
	private pieceTypes = [
		Cube,
		Line,
		LL,
		LR
	];

	private keys = {
		up: false,
		down: false,
		left: false,
		right: false,
	};

	private currentPiece: Piece = null;
	private grid: Grid = null;

	constructor() {
		super();
		this.grid = new Grid();
		Input.registerMouseDown(this, this.mousedown);
	}

	public update() {
		// drop a new piece
		if (this.currentPiece == null) {
			let randomIndex = Math.floor(Math.random() * this.pieceTypes.length);
			let _Piece = this.pieceTypes[randomIndex];
			this.currentPiece = new _Piece();

			let p  = new Vector2(
				-Math.floor(this.currentPiece.arrangement[0].length/2),
				-this.grid.transform.size.y/2
			);
			if (this.grid.transform.size.x % 2 != 0) {
				p.x -= 0.5;
			}
			this.currentPiece.transform.position = p;
		}

		// control the falling piece
		if (this.currentPiece) {
			this.handleInput();
			if (this.currentPiece.transform.position.y > this.grid.transform.size.y/2) {
				GameManager.destroy(this.currentPiece);
			}
		}

		if (Input.keys(Keys.Key1) && GameManager.unitSize > 5) {
			GameManager.currentLevel.unitSize -= 0.5;
		}
		if (Input.keys(Keys.Key2) && GameManager.unitSize < 500) {
			GameManager.currentLevel.unitSize += 0.5;
		}
	}

	private handleInput(): void {
		// don't allow repeat moves, have to press the button again
		// left
		if (Input.keys(Keys.ArrowLeft) && !this.keys.left) {
			this.keys.left = true;
			this.movePieceLeft();
		}
		if (!Input.keys(Keys.ArrowLeft) && this.keys.left) {
			this.keys.left = false;
		}
		// right
		if (Input.keys(Keys.ArrowRight) && !this.keys.right) {
			this.keys.right = true;
			this.movePieceRight();
		}
		if (!Input.keys(Keys.ArrowRight) && this.keys.right) {
			this.keys.right = false;
		}
	}

	private movePieceLeft(): void {
		if (this.currentPiece) {
			if (this.currentPiece.transform.position.x > -this.grid.transform.size.x/2) {
				this.currentPiece.transform.position.x--;
			}
		}
	}

	private movePieceRight(): void {

		if (this.currentPiece) {
			let pieceWidth = this.currentPiece.arrangement[0].length;
			if (this.currentPiece.transform.position.x + pieceWidth < this.grid.transform.size.x/2) {
				this.currentPiece.transform.position.x++;
			}
		}
	}

	private mousedown(coords:Vector2, gameObjects:GameObject[]): void {
		console.log(coords);
		console.log(gameObjects);
	}
}
