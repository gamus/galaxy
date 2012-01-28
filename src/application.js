(function(global) {

  // Initialize here application
  // 1. Retrieve game graphics
  // 2. Load to the scenes
  // 3. Start game rendering and updating process on each frame
  //

  // setup events for game
  window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
  window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

  var canvas = document.getElementById('canvas-container');
  var context = canvas.getContext('2d');

  Game.init(context, {
    WIDHT:  640,
    HEIGHT: 480
  });

  global.onEachFrame(Game.run);
})(window);
