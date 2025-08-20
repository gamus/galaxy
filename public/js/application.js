// Application entry point
import { Key } from './base/events.js';
import { onEachFrame } from './base/animation.js';
import { Game } from './game.js';
import { Levels } from './models/levels.js';
// Initialize application when window loads
window.onload = () => {
    // Set up keyboard event listeners
    window.addEventListener("keyup", (event) => {
        Key.onKeyup(event);
    }, false);
    window.addEventListener("keydown", (event) => {
        Key.onKeydown(event);
    }, false);
    // Get canvas element
    const canvas = document.getElementById("canvas-container");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }
    // Initialize levels and game
    const levels = new Levels();
    const game = new Game(levels, {
        width: canvas.width,
        height: canvas.height
    });
    // Set up global context and game references
    window.context = canvas.getContext("2d");
    window.game = game;
    // Start the game
    game.start();
    // Start the game loop
    onEachFrame(game.run());
};
//# sourceMappingURL=application.js.map