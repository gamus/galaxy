// Enemy3 - third enemy type

import { Enemy, EnemyOptions } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';

export class Enemy3 extends Enemy {
  constructor(options: EnemyOptions) {
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
(window as any).Enemy3 = Enemy3;