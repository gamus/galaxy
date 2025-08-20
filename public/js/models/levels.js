// Levels class for managing game levels
import { Level } from './level.js';
export class Levels {
    constructor() {
        this.levels = [];
        this.generate();
    }
    build(index) {
        return new Level(this.levels[index]);
    }
    generate() {
        const level01 = {
            name: "Level 1",
            map: [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
        };
        const level02 = {
            name: "Level 2",
            map: [[0, 1, 0, 0, 1, 1, 0, 0, 1, 0]]
        };
        const level03 = {
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
window.Levels = Levels;
//# sourceMappingURL=levels.js.map