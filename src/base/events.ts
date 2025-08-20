// Keyboard event handling system

export interface KeyState {
  _pressed: { [key: number]: boolean };
  LEFT: number;
  UP: number;
  RIGHT: number;
  DOWN: number;
  SPACE: number;
  isDown(keyCode: number): boolean;
  onKeydown(event: KeyboardEvent): void;
  onKeyup(event: KeyboardEvent): void;
  remove(key: number): void;
}

export const Key: KeyState = {
  _pressed: {},
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  
  isDown(keyCode: number): boolean {
    return this._pressed[keyCode] || false;
  },

  onKeydown(event: KeyboardEvent): void {
    this._pressed[event.keyCode] = true;
  },

  onKeyup(event: KeyboardEvent): void {
    this.remove(event.keyCode);
  },

  remove(key: number): void {
    delete this._pressed[key];
  }
};

// Make Key available globally for compatibility
(window as any).Key = Key;