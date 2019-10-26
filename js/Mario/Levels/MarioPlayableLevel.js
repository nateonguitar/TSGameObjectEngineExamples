class MarioPlayableLevel extends Level {
    constructor(params) {
        super({
            managingGameObjectClass: params.managingGameObjectClass,
            imageSrcs: [
                'Images/SpriteSheet.png',
                'Images/SpriteSheetTiles.png',
                '../Zelda/Images/SoldierBlue.png',
            ],
            unitSize: 50,
            hudUnitSize: 25,
            backgroundColor: params.backgroundColor,
            extraViewportPadding: new Vector2(0, Infinity)
        });
    }
}
//# sourceMappingURL=MarioPlayableLevel.js.map