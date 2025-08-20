// Animation frame utilities

// Shim layer with setTimeout fallback for requestAnimationFrame
const requestAnimFrame = ((): (callback: FrameRequestCallback) => number => {
  return window.requestAnimationFrame ||
    (window as any).webkitRequestAnimationFrame ||
    (window as any).mozRequestAnimationFrame ||
    (window as any).oRequestAnimationFrame ||
    (window as any).msRequestAnimationFrame ||
    ((callback: FrameRequestCallback): number => {
      return window.setTimeout(callback, 1000 / 60);
    });
})();

export function onEachFrame(callback: () => void): void {
  const _cb = (): void => {
    callback();
    requestAnimFrame(_cb);
  };
  
  _cb();
}

// Make functions available globally for compatibility
(window as any).requestAnimFrame = requestAnimFrame;
(window as any).onEachFrame = onEachFrame;