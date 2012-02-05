var Game = function(context, options, callback) {
  options = options || {};

  this.bullets = [];
  this.enemies = [];

  // TODO: place levels into separate models like Level
  // for working generating level world using simple
  // methods.
  this.levels = [];

  this.context = context;

  this.joystick = options.joystick;
  this.width = options.width || 640;
  this.height = options.height || 480;

  this.player = new Player(this);
};

Game.FPS = 60;

Game.prototype.init = function() {
  // By default we are selectin the first level.
  this.level = Levels.levels[0]();
  this.enemies = this.level.enemies;
};

Game.prototype.draw = function(interpolation) {
  this.context.clearRect(0, 0, this.width, this.height);

  this.player.draw(interpolation);

  for(var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].draw(interpolation);
  }

  for(var i = 0; i < this.bullets.length; i++) {
    this.bullets[i].draw(interpolation);
  }
};

Game.prototype.update = function() {
  this.player.update();

  for(var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].update();
  }

  for(var i = 0; i < this.bullets.length; i++) {
    this.bullets[i].update();
  }
};

Game.prototype.run = (function() {
  var loops = 0, skipTicks = 1000 / Game.FPS,
      maxFrameSkip = 10,
      nextGameTick = (new Date).getTime();

  return function() {
    loops = 0;

    while((new Date).getTime() > nextGameTick) {
      this.update();
      nextGameTick += skipTicks;
      loops++;
    }

    if (!loops) {
      this.draw((nextGameTick - (new Date).getTime()) / skipTicks);
    } else {
      this.draw(0);
    }
  };
})();
