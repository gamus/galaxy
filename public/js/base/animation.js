// Animation frame utilities
// Shim layer with setTimeout fallback for requestAnimationFrame
const requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        ((callback) => {
            return window.setTimeout(callback, 1000 / 60);
        });
})();
export function onEachFrame(callback) {
    const _cb = () => {
        callback();
        requestAnimFrame(_cb);
    };
    _cb();
}
// Make functions available globally for compatibility
window.requestAnimFrame = requestAnimFrame;
window.onEachFrame = onEachFrame;
//# sourceMappingURL=animation.js.map