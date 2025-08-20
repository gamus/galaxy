// Enemy4 - fourth enemy type
import { Enemy } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';
export class Enemy4 extends Enemy {
    constructor(options) {
        super(options);
        this.sprite = new Sprite({
            url: "./images/enemy04.png",
            width: this.width,
            height: this.height,
            map: this.map
        });
    }
}
// Make Enemy4 available globally for compatibility
window.Enemy4 = Enemy4;
//# sourceMappingURL=enemy4.js.map