// Level class for game levels

import { Enemy } from './enemy.js';

export interface LevelOptions {
  name: string;
  map: number[][];
}

export class Level {
  public name: string;
  public map: number[][];
  public enemies: Enemy[];

  constructor(options: LevelOptions) {
    this.name = options.name;
    this.map = options.map;
    this.enemies = [];
    this.generate();
  }

  generate(): void {
    for (let i = 0; i < this.map.length; i++) {
      const row = this.map[i];
      for (let j = 0; j < row.length; j++) {
        const column = row[j];
        if (column > 0) {
          const options = {
            positionX: j,
            positionY: i
          };

          // Dynamically create enemy based on type
          const EnemyClass = (window as any)[`Enemy${column}`];
          if (EnemyClass) {
            const enemy = new EnemyClass(options);
            this.enemies.push(enemy);
          }
        }
      }
    }
  }
}

// Make Level available globally for compatibility
(window as any).Level = Level;