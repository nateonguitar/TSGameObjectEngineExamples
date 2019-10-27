import { Piece } from "./Piece";

// Piece extends GameObject
export class Cube extends Piece {
	constructor() {
		super();
		this.outerColor = '#FF0000';
		this.innerColor = '#fbb2b2';
		this.arrangement = [
			[true, true],
			[true, true],
		];
	}
}
