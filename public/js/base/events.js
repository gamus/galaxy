// Keyboard event handling system
export const Key = {
    _pressed: {},
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    isDown(keyCode) {
        return this._pressed[keyCode] || false;
    },
    onKeydown(event) {
        this._pressed[event.keyCode] = true;
    },
    onKeyup(event) {
        this.remove(event.keyCode);
    },
    remove(key) {
        delete this._pressed[key];
    }
};
// Make Key available globally for compatibility
window.Key = Key;
//# sourceMappingURL=events.js.map