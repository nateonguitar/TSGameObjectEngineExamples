// Piece extends GameObject
class LL extends Piece {
	constructor() {
		super();
		this.outerColor = '#ce7b00';
		this.innerColor = '#ffbe5e';
		this.arrangement = [
			[false, true],
			[false, true],
			[true, true],
		];
	}
}
