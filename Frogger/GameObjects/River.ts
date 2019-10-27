import { GameObject, Vector2, Canvas } from "game-object-engine/dist";
import { RiverBank } from ".";

export class River extends GameObject {

	private blue: string     = "#003388";
	private darkBlue: string = "#002244";
	private topBank: RiverBank = null;
	private bottomBank: RiverBank = null;

	constructor() {
		super({layer: 0});
		this.transform.size = new Vector2(16, 16);
		this.topBank = new RiverBank();
		this.bottomBank = new RiverBank();

		this.topBank.transform.position.y = -this.transform.size.y/2 + 0.5;
		this.bottomBank.transform.position.y = this.transform.size.y/2 - 0.5;
	}

	public draw(): void {
		let t = this.transform;
		let p = t.position.scale(this.unitSize);
		let s = t.size.scale(this.unitSize);

		// draw river water
		Canvas.fillRect(p, s, this.blue, true);

		// draw separator lines
		for (let i=-s.y/2; i<s.y/2; i += this.unitSize) {
			Canvas.fillRect(
				new Vector2(0, i),
				new Vector2(s.x, 1),
				this.darkBlue,
				true
			);
		}
	}
}
