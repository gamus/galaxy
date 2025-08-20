// Enemy2 - second enemy type
import { Enemy } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';
export class Enemy2 extends Enemy {
    constructor(options) {
        super(options);
        this.sprite = new Sprite({
            url: "./images/enemy02.png",
            width: this.width,
            height: this.height,
            map: this.map
        });
    }
}
// Make Enemy2 available globally for compatibility
window.Enemy2 = Enemy2;
//# sourceMappingURL=enemy2.js.map