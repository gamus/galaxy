(function(global) {
  var onEachFrame;
  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  onEachFrame = function(callback) {
    var _cb = function() { callback(); webkitRequestAnimationFrame(_cb); };
    _cb();
  };

  global.onEachFrame = onEachFrame;
})(window);

