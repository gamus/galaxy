Game = {};

Game.FPS = 60;

Game.init = function(context, options) {
  options = options || {};

  this.entities = [];
  this.context = context;

  this.WIDTH = options.WIDTH || 640;
  this.HEIGHT = options.HEIGHT || 480;

  this.initializeModels();
};

Game.initializeModels = function() {
  this.entities.push(new Player(this));
};

Game.draw = function(interpolation) {
  this.context.clearRect(0, 0, this.WIDHT, this.HEIGHT);

  for(var i = 0; i < this.entities.length; i++) {
    this.entities[i].draw(interpolation);
  }
};

Game.update = function() {
  for(var i = 0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};

Game.run = (function() {
  var loops = 0, skipTicks = 1000 / Game.FPS,
      maxFrameSkip = 10,
      nextGameTick = (new Date).getTime();

  return function() {
    loops = 0;

    while((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
      Game.update();
      nextGameTick += skipTicks;
      loops++;
    }

    if (!loops) {
      Game.draw((nextGameTick - (new Date).getTime()) / skipTicks);
    } else {
      Game.draw(0);
    }
  };
})();
