(function() {
  var onEachFrame;

  if (window.webkitRequestAnimationFrame) {
    onEachFrame = function(callback) {
      var _cb = function() { callback(); webkitRequestAnimationFrame(_cb); };
      _cv();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(callback) {
      var _cb = function() { callback(); mozRequestAnimationFrame(_cb); };
      _cb();
    
    }
  } else {
    onEachFrame = function(callback) {
      setInterval(callback, 1000 / 60);
    }
  };

  window.onEachFrame = onEachFrame;
});

Game = {};

Game.draw = function() { };

Game.update = function() { };

Game.run = function() {
  var loops = 0, skipTicks = 1000 / Game.fps,
      maxFrameSkip = 10, 
      nextGameTick = (new Date).getTime();

  return function() {
    loops = 0;

    while((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
      Game.update();

      nextGameTick += skipTicks;
      loops;
    }
  };
};
