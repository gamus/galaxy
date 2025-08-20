// Enemy1 - basic enemy type
import { Enemy } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';
export class Enemy1 extends Enemy {
    constructor(options) {
        super(options);
        this.sprite = new Sprite({
            url: "./images/enemy01.png",
            width: this.width,
            height: this.height,
            map: this.map
        });
    }
}
// Make Enemy1 available globally for compatibility
window.Enemy1 = Enemy1;
//# sourceMappingURL=enemy1.js.map