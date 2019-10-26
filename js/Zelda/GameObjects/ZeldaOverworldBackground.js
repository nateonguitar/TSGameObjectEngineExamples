class ZeldaOverworldBackground extends GameObject {
    constructor(boundarySize) {
        super({
            layer: 0,
            imageSrc: "Images/Overworld.png",
        });
        this.transform.size = boundarySize.clone();
        this.transform.position = boundarySize.scale(0.5);
    }
}
//# sourceMappingURL=ZeldaOverworldBackground.js.map