// Enemy5 - fifth enemy type

import { Enemy, EnemyOptions } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';

export class Enemy5 extends Enemy {
  constructor(options: EnemyOptions) {
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
(window as any).Enemy5 = Enemy5;