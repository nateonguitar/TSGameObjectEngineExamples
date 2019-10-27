import { GameObject, Debug, GameManager, Input, Keys } from "game-object-engine/dist";
import { Vector2 } from "game-object-engine/dist";

import {
	Player,
	OverworldBackground,
	Soldier,
	SoldierBlue,
	SoldierGreen
 } from "../GameObjects";

export class OverworldController extends GameObject {
	private player: Player = null;
	private background: OverworldBackground = null;

	private enemies: Soldier[] = [];

	constructor() {
		super({
			layer: 0
		});

		let boundarySize = new Vector2(60, 60);

		this.background = new OverworldBackground(boundarySize);
		Debug.trackGameObject(this.background);

		this.player = new Player(boundarySize);

		// move player position to center of map
		this.player.transform.position = this.background.transform.position.clone();
		Debug.trackGameObject(this.player);

		// put the camera on top of the player (in case you want to test removing the player from the camera)
		GameManager.camera.worldspacePosition = this.player.transform.position;

		// camera follow
		GameManager.camera.follow(this.player);

		for (let i=0; i<50; i++) {
			this.enemies.push(new SoldierGreen(boundarySize));
			this.enemies.push(new SoldierBlue(boundarySize));
			this.enemies.push(new SoldierBlue(boundarySize));
			this.enemies.push(new SoldierBlue(boundarySize));
		}

	}

	public update() {
		if (Input.keys(Keys.Key1) && GameManager.unitSize > 5) {
			GameManager.currentLevel.unitSize -= 0.5;
		}
		if (Input.keys(Keys.Key2) && GameManager.unitSize < 500) {
			GameManager.currentLevel.unitSize += 0.5;
		}
	}
}
