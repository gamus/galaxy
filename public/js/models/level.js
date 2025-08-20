// Level class for game levels
export class Level {
    constructor(options) {
        this.name = options.name;
        this.map = options.map;
        this.enemies = [];
        this.generate();
    }
    generate() {
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
                    const EnemyClass = window[`Enemy${column}`];
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
window.Level = Level;
//# sourceMappingURL=level.js.map