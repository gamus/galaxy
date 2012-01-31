var Game = function(context, options) {
  options = options || {};

  this.bullets = [];
  this.enemies = [];

  // TODO: place levels into separate models like Level
  // for working generating level world using simple 
  // methods.
  this.levels = [];

  this.context = context;

  this.width = options.width || 640;
  this.height = options.height || 480;

  this.initializeModels();
  this.initializeEnemies();
};

Game.FPS = 60;

Game.prototype.initializeEnemies = function() {
  this.enemies.push(new Enemy(this));
};

Game.prototype.initializeModels = function() {
  this.player = new Player(this);
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

    while((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
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
