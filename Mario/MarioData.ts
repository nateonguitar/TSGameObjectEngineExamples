class MarioData {
	public static lives: number = 3;
	public static score: number = 0;
	public static coins: number = 0;
	public static world: number = 1;
	public static level: number = 1;
	public static time: number = 366;
	public static hud: { panel: HudGameObject; score: HudGameObject; lives: HudGameObject; coins: HudGameObject; level: HudGameObject; time: HudGameObject } = null;
}
