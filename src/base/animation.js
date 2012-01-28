(function(global) {
  var onEachFrame;

  if (window.webkitRequestAnimationFrame) {
    onEachFrame = function(callback) {
      var _cb = function() { callback(); webkitRequestAnimationFrame(_cb); };
      _cb();
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

  global.onEachFrame = onEachFrame;
})(window);

