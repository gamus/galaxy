// Main Game class
import { Player } from './models/player.js';
export class Game {
    constructor(levels, options) {
        this.FPS = 60;
        this.levels = levels;
        options = options || {};
        this.width = options.width || 640;
        this.height = options.height || 480;
        this.enemies = [];
        this.bullets = [];
    }
    draw(interpolation) {
        const context = window.context;
        context.clearRect(0, 0, this.width, this.height);
        if (this.player) {
            this.player.draw();
        }
        for (const enemy of this.enemies) {
            enemy.draw();
        }
        for (const bullet of this.bullets) {
            bullet.draw(interpolation);
        }
    }
    start() {
        this.player = new Player();
        this.level = this.levels.build(0);
        this.enemies = this.level.enemies;
    }
    update() {
        if (this.player) {
            this.player.update();
        }
        for (const enemy of this.enemies) {
            enemy.update();
        }
        for (const bullet of this.bullets) {
            bullet.update();
        }
    }
    run() {
        let loops = 0;
        const skipTicks = 1000 / this.FPS;
        const maxFrameSkip = 10;
        let nextGameTick = new Date().getTime();
        return () => {
            loops = 0;
            while (new Date().getTime() > nextGameTick) {
                this.update();
                nextGameTick += skipTicks;
                loops++;
            }
            if (!loops) {
                this.draw((nextGameTick - new Date().getTime()) / skipTicks);
            }
            else {
                this.draw(0);
            }
        };
    }
}
// Make Game available globally for compatibility
window.Game = Game;
//# sourceMappingURL=game.js.map