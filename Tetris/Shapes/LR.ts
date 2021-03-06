import { Piece } from "./Piece";

// Piece extends GameObject
export class LR extends Piece {
	constructor() {
		super();
		this.outerColor = '#b342f4';
		this.innerColor = '#dca0ff';
		this.arrangement = [
			[true, false],
			[true, false],
			[true, true],
		];
	}
}
