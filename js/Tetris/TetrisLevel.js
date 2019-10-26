class TetrisLevel extends Level {
    constructor() {
        super({
            managingGameObjectClass: TetrisController,
            extraViewportPadding: GameManager.screenSize.scale(5),
            unitSize: 25
        });
    }
}
//# sourceMappingURL=TetrisLevel.js.map