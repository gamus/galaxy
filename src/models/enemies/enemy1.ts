// Enemy1 - basic enemy type

import { Enemy, EnemyOptions } from '../enemy.js';
import { Sprite } from '../../base/sprite.js';

export class Enemy1 extends Enemy {
  constructor(options: EnemyOptions) {
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
(window as any).Enemy1 = Enemy1;