// Keyboard input handler for game objects

import { Key } from './events.js';

export interface KeyboardHandler {
  update(object: any): void;
}

export function Keyboard(): KeyboardHandler {
  return {
    update(object: any): void {
      if (Key.isDown(Key.UP)) object.y -= object.step;
      if (Key.isDown(Key.DOWN)) object.y += object.step;
      if (Key.isDown(Key.LEFT)) object.x -= object.step;
      if (Key.isDown(Key.RIGHT)) object.x += object.step;
      if (Key.isDown(Key.SPACE)) object.shoot();
    }
  };
}

// Make Keyboard available globally for compatibility
(window as any).Keyboard = Keyboard;