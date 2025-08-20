// Enemy3 - third enemy type
import { Enemy } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';
export class Enemy3 extends Enemy {
    constructor(options) {
        super(options);
        this.sprite = new Sprite({
            url: "./images/enemy03.png",
            width: this.width,
            height: this.height,
            map: this.map
        });
    }
}
// Make Enemy3 available globally for compatibility
window.Enemy3 = Enemy3;
//# sourceMappingURL=enemy3.js.map