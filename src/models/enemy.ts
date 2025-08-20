// Base Enemy class

import { Sprite } from '../base/sprite.js';

export interface EnemyOptions {
  x?: number;
  y?: number;
  positionX?: number;
  positionY?: number;
}

export class Enemy {
  public width: number;
  public height: number;
  public x: number;
  public y: number;
  public life: number;
  public scale: number;
  protected options: EnemyOptions;
  protected map: { [key: string]: { x: number; y: number } };
  protected iterator: number;
  protected step: number;
  protected scaleStep: number;
  protected sprite?: Sprite;

  constructor(options: EnemyOptions) {
    this.options = options;
    this.width = 35;
    this.height = 35;

    this.x = options.x || (options.positionX ? options.positionX * this.width : 0);
    this.y = options.y || (options.positionY ? options.positionY * this.height : 0);
    
    this.map = {};
    this.map["default"] = { x: 0, y: 0 };

    this.iterator = 0;
    this.step = 2;
    this.life = 5;
    this.scale = 1;
    this.scaleStep = 0.05;
  }

  die(): void {
    const game = (window as any).game;
    game.enemies.remove(this);
  }

  draw(): void {
    if (this.sprite) {
      const context = (window as any).context;
      context.save();
      context.translate(this.x, this.y);
      this.sprite.draw("default");
      context.restore();
    }
  }

  update(): void {
    if (this.iterator >= 50) {
      this.step = this.step < 0 ? 2 : -2;
      this.iterator = 0;
    } else {
      this.iterator += 1;
    }
    this.x += this.step;
  }
}

// Make Enemy available globally for compatibility
(window as any).Enemy = Enemy;