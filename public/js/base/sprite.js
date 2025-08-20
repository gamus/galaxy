// Sprite handling for game graphics
export class Sprite {
    constructor(options) {
        this.image = new Image();
        this.image.src = options.url;
        this.width = options.width;
        this.height = options.height;
        this.map = options.map;
        this.times = 1;
    }
    scale(times) {
        this.times = times;
    }
    draw(step) {
        const pos = this.map[step];
        const context = window.context;
        context.save();
        context.scale(this.times, this.times);
        context.drawImage(this.image, pos.x, pos.y, this.width, this.height, 0, 0, this.width, this.height);
        context.restore();
    }
}
// Make Sprite available globally for compatibility
window.Sprite = Sprite;
//# sourceMappingURL=sprite.js.map