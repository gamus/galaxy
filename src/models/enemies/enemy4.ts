// Enemy4 - fourth enemy type

import { Enemy, EnemyOptions } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';

export class Enemy4 extends Enemy {
  constructor(options: EnemyOptions) {
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
(window as any).Enemy4 = Enemy4;