import { GameObject, Vector2 } from "game-object-engine/dist";

export class RiverBank extends GameObject {
	constructor() {
		super({
			layer: 1,
			shape: "rectangle",
			shapeFillStyle: "#654321" // brown
		});
		this.transform.size = new Vector2(16, 1);
	}
}
