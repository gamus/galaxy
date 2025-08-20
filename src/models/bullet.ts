// Bullet class for player projectiles

import { Sprite } from '../base/sprite.js';

export interface BulletOptions {
  x: number;
  y: number;
}

export class Bullet {
  public width: number;
  public height: number;
  public step: number;
  public x: number;
  public y: number;
  private sprite: Sprite;
  private map: { [key: string]: { x: number; y: number } };

  constructor(options: BulletOptions) {
    this.width = 8;
    this.height = 8;
    this.step = 2;
    this.x = options.x;
    this.y = options.y;

    this.map = { default: { x: 0, y: 0 } };
    this.sprite = new Sprite({
      url: './images/bullet.png',
      width: this.width,
      height: this.height,
      map: this.map
    });
  }

  update(): void {
    this.y -= this.step;
    if (this.y < 0) {
      this.die();
    }
  }

  die(): void {
    const game = (window as any).game;
    game.bullets.remove(this);
  }

  draw(interpolation?: number): void {
    const context = (window as any).context;
    context.save();
    context.translate(this.x, this.y);
    this.sprite.draw('default');
    context.restore();
  }
}

// Make Bullet available globally for compatibility
(window as any).Bullet = Bullet;