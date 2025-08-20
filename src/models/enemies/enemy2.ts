// Enemy2 - second enemy type

import { Enemy, EnemyOptions } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';

export class Enemy2 extends Enemy {
  constructor(options: EnemyOptions) {
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
(window as any).Enemy2 = Enemy2;