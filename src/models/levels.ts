// Levels class for managing game levels

import { Level, LevelOptions } from './level.js';

export class Levels {
  private levels: LevelOptions[];

  constructor() {
    this.levels = [];
    this.generate();
  }

  build(index: number): Level {
    return new Level(this.levels[index]);
  }

  generate(): void {
    const level01: LevelOptions = {
      name: "Level 1",
      map: [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
    };

    const level02: LevelOptions = {
      name: "Level 2",
      map: [[0, 1, 0, 0, 1, 1, 0, 0, 1, 0]]
    };

    const level03: LevelOptions = {
      name: "Level 3",
      map: [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
      ]
    };

    this.levels.push(level01);
    this.levels.push(level02);
    this.levels.push(level03);
  }
}

// Make Levels available globally for compatibility
(window as any).Levels = Levels;