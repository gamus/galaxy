// Bullet class for player projectiles
import { Sprite } from '../base/sprite.js';
export class Bullet {
    constructor(options) {
        this.width = 8;
        this.height = 8;
        this.step = 2;
        this.x = options.x;
        this.y = options.y;
        this.map = { default: { x: 0, y: 0 } };
        this.sprite = new Sprite({
            url: './images/bullet.png',
            width: this.width,
            height: this.height,
            map: this.map
        });
    }
    update() {
        this.y -= this.step;
        if (this.y < 0) {
            this.die();
        }
    }
    die() {
        const game = window.game;
        game.bullets.remove(this);
    }
    draw(interpolation) {
        const context = window.context;
        context.save();
        context.translate(this.x, this.y);
        this.sprite.draw('default');
        context.restore();
    }
}
// Make Bullet available globally for compatibility
window.Bullet = Bullet;
//# sourceMappingURL=bullet.js.map