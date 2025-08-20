// Utility functions for the game

// Extend functionality for class inheritance
export function extend(B: any, A: any): void {
  const I = function() {};
  I.prototype = A.prototype;
  B.prototype = new (I as any)();
  B.prototype.constructor = B;
}

// Array extension for removing objects
declare global {
  interface Array<T> {
    remove(object: T): T;
    clone(): T[];
  }
}

Array.prototype.remove = function<T>(this: T[], object: T): T {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === object) {
      this.splice(i, 1);
      break;
    }
  }
  return object;
};

Array.prototype.clone = function<T>(this: T[]): T[] {
  return this.slice(0);
};

// Bind function helper
export function bind(fn: Function, me: any): Function {
  return function() {
    return fn.apply(me, arguments);
  };
}