import { Piece } from "./Piece";

// Piece extends GameObject
export class Line extends Piece {
	constructor() {
		super();
		this.outerColor = '#0000FF';
		this.innerColor = '#bcd6ff';
		this.arrangement = [
			[true],
			[true],
			[true],
			[true],
		];
		this.arrangement = [
			[true],
			[true],
			[true],
			[true],
		];
	}
}
