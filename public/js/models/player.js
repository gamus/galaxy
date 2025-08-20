// Player class for the game
import { Sprite } from '../base/sprite.js';
import { Keyboard } from '../base/keyboard.js';
import { Key } from '../base/events.js';
import { Bullet } from './bullet.js';
export class Player {
    constructor() {
        this.width = 35;
        this.height = 35;
        this.step = 5;
        const game = window.game;
        this.x = game.width / 2;
        this.y = game.height - this.height;
        this.key = Key.UP;
        const map = {};
        map[Key.LEFT.toString()] = { x: 0, y: 0 };
        map[Key.RIGHT.toString()] = { x: 0, y: 0 };
        map[Key.UP.toString()] = { x: 0, y: 0 };
        map[Key.DOWN.toString()] = { x: 0, y: 0 };
        map[Key.SPACE.toString()] = { x: 0, y: 0 };
        this.sprite = new Sprite({
            url: "./images/ship.png",
            width: this.width,
            height: this.height,
            map: map
        });
        this.life = 10;
        this.nextShootTime = new Date().getTime();
        this.shootDelay = 400;
        this.input = new Keyboard();
    }
    die() {
        // Place there label drawing with game over information.
        console.log("end game");
    }
    update() {
        this.ensurePosition();
        this.input.update(this);
    }
    shoot() {
        Key.remove(Key.SPACE);
        if (this.nextShootTime < new Date().getTime()) {
            this.nextShootTime = new Date().getTime() + this.shootDelay;
            const game = window.game;
            game.bullets.push(new Bullet({
                x: this.x + this.width / 2 - 4,
                y: this.y
            }));
        }
    }
    ensurePosition() {
        const game = window.game;
        if (this.x < 0)
            this.x = 0;
        if (this.y <= 0)
            this.y = 0;
        if (this.x >= game.width - this.width)
            this.x = game.width - this.width;
        if (this.y >= game.height - this.height)
            this.y = game.height - this.height;
    }
    draw() {
        const context = window.context;
        context.save();
        context.translate(this.x, this.y);
        this.sprite.draw(this.key.toString());
        context.restore();
    }
}
// Make Player available globally for compatibility
window.Player = Player;
//# sourceMappingURL=player.js.map