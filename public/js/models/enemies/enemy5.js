// Enemy5 - fifth enemy type
import { Enemy } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';
export class Enemy5 extends Enemy {
    constructor(options) {
        super(options);
        this.sprite = new Sprite({
            url: "./images/enemy05.png",
            width: this.width,
            height: this.height,
            map: this.map
        });
    }
}
// Make Enemy5 available globally for compatibility
window.Enemy5 = Enemy5;
//# sourceMappingURL=enemy5.js.map