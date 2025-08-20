// Keyboard input handler for game objects
import { Key } from './events.js';
export function Keyboard() {
    return {
        update(object) {
            if (Key.isDown(Key.UP))
                object.y -= object.step;
            if (Key.isDown(Key.DOWN))
                object.y += object.step;
            if (Key.isDown(Key.LEFT))
                object.x -= object.step;
            if (Key.isDown(Key.RIGHT))
                object.x += object.step;
            if (Key.isDown(Key.SPACE))
                object.shoot();
        }
    };
}
// Make Keyboard available globally for compatibility
window.Keyboard = Keyboard;
//# sourceMappingURL=keyboard.js.map