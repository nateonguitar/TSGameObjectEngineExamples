import {
	GameObject,
	Debug,
	GameManager,
	Input,
	Keys,
	Vector2
} from "game-object-engine/dist";
import { Player, River, LandingObject, LogSmall } from "../GameObjects";

export class MainLevelController extends GameObject {

	private player: Player = null;
	private river: River = null;

	private logs: LandingObject[] = [];

	private test: GameObject = null;

	constructor() {
		super({layer: 0});

		this.river = new River();
		this.player = new Player();

		let initialPosition = this.river.transform.position.clone();
		initialPosition.y += this.river.transform.size.y / 2;
		initialPosition.y -= this.player.transform.size.y / 2;
		this.player.setInitialPosition(initialPosition);
		this.player.goToInitialPosition();

		Debug.trackGameObject(this.player);
		Debug.trackGameObject(this.river);
		this.buildLogs();

		GameManager.camera.follow(this.player);
	}

	// override
	public update(): void {
		if (Input.keys(Keys.Key1) && GameManager.unitSize > 5) {
			GameManager.currentLevel.unitSize -= 0.5;
		}
		if (Input.keys(Keys.Key2) && GameManager.unitSize < 500) {
			GameManager.currentLevel.unitSize += 0.5;
		}
	}

	private buildLogs(): void {

		for (let i=0; i<3; i++) {
			let log = new LogSmall(i.toString());
			log.transform.position = new Vector2(
				this.player.transform.position.x,
				this.river.transform.position.y - 0.5 + i*2
			)
			this.logs.push(log);
			Debug.trackGameObject(log);
		}
	}
}
