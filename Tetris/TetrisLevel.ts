import { Level, GameManager } from "game-object-engine/dist";

import { LevelParams } from "game-object-engine/dist/Level";

import { TetrisController } from "./TetrisController";

export class TetrisLevel extends Level {
	constructor() {
		super(<LevelParams>{
			managingGameObjectClass: TetrisController,
			extraViewportPadding: GameManager.screenSize.scale(5),
			unitSize: 25
		});
	}
}
