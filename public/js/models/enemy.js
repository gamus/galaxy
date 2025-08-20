// Base Enemy class
export class Enemy {
    constructor(options) {
        this.options = options;
        this.width = 35;
        this.height = 35;
        this.x = options.x || (options.positionX ? options.positionX * this.width : 0);
        this.y = options.y || (options.positionY ? options.positionY * this.height : 0);
        this.map = {};
        this.map["default"] = { x: 0, y: 0 };
        this.iterator = 0;
        this.step = 2;
        this.life = 5;
        this.scale = 1;
        this.scaleStep = 0.05;
    }
    die() {
        const game = window.game;
        game.enemies.remove(this);
    }
    draw() {
        if (this.sprite) {
            const context = window.context;
            context.save();
            context.translate(this.x, this.y);
            this.sprite.draw("default");
            context.restore();
        }
    }
    update() {
        if (this.iterator >= 50) {
            this.step = this.step < 0 ? 2 : -2;
            this.iterator = 0;
        }
        else {
            this.iterator += 1;
        }
        this.x += this.step;
    }
}
// Make Enemy available globally for compatibility
window.Enemy = Enemy;
//# sourceMappingURL=enemy.js.map