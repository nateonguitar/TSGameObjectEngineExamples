class MarioGameTile extends GameObject {
    constructor(params) {
        super({ layer: 1 });
        this.setDefaultCollider();
        if (params.hasCollider) {
            this.collider.allowPassThroughWhitelist = [BackBarrier];
            if (params.allowPassThrough) {
                this.collider.allowPassThroughWhitelist.push(MarioPlayer);
            }
            this.breakFromBeneath = params.breakFromBeneath;
        }
        this.spritesheetAnimationSet = params.spritesheetAnimationSet;
        Input.registerMouseDown(this, this.mousedown);
    }
    mousedown(coords, gameObjects) {
        for (let obj of gameObjects) {
            if (obj == this) {
                let manager = GameManager.currentLevel.managingGameObject;
                manager.destroyTile(this);
            }
        }
    }
    /** override if you want other behavior */
    onHitFromBeneath() {
        let manager = GameManager.currentLevel.managingGameObject;
        if (this.breakFromBeneath) {
            manager.destroyTile(this);
        }
    }
}
MarioGameTile.spriteSheet = 'Images/SpriteSheetTiles.png';
MarioGameTile.spriteSize = new Vector2(16, 16);
//# sourceMappingURL=MarioGameTile.js.map