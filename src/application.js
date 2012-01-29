(function(global) {

  // Initialize here application
  // 1. Retrieve game graphics
  // 2. Load to the scenes
  // 3. Start game rendering and updating process on each frame
  //

  global.onload = function() {
    // setup events for game
    global.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
    global.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

    var canvas = document.getElementById('canvas-container');
    var context = canvas.getContext('2d');

    var game = new Game(context, {
      width:  canvas.width,
      height: canvas.height
    });

    global.onEachFrame(function() {
      game.run.call(game);
    });
  };

})(window);
