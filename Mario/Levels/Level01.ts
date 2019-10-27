import { PlayableLevel, Level01Controller } from ".";

export class Level01 extends PlayableLevel {
    constructor() {
		super({
			managingGameObjectClass: Level01Controller,
			backgroundColor: "#5c94fc",
		});
	}
}
