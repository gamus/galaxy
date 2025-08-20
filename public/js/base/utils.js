// Utility functions for the game
// Extend functionality for class inheritance
export function extend(B, A) {
    const I = function () { };
    I.prototype = A.prototype;
    B.prototype = new I();
    B.prototype.constructor = B;
}
Array.prototype.remove = function (object) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === object) {
            this.splice(i, 1);
            break;
        }
    }
    return object;
};
Array.prototype.clone = function () {
    return this.slice(0);
};
// Bind function helper
export function bind(fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
}
//# sourceMappingURL=utils.js.map