var Enemy = function(game, options) {
  this.game = game;
  this.context = this.game.context;

  this.width = 45;
  this.height = 52;

  // Startup positions should be set via level model.
  this.x = options.x || (options.positionX * this.width);
  this.y = options.y || (options.positionY * this.height);

  var map = {};
  map['default'] = { x: 0, y: 0 };

  this.sprite = new Sprite(this.context, {
    url: './images/enemy.gif',
    width: this.width,
    height: this.height,
    map: map
  });

  // This variable for creating circular movements for group of enimies.
  this.iterator = 0;
  this.step = 2;

  this.life = 5;
  this.scale = 1;
  this.scaleStep = 0.05;
};

Enemy.prototype.die = function() {
  this.life -= 1;
  this.scale -= this.scaleStep;
  this.sprite.scale(this.scale);
  if (this.life === 0) {
    this.game.enemies.remove(this);
  }
};

Enemy.prototype.update = function() {
  if (this.iterator >= 100) {
    this.step = this.step < 0 ? 2 : -2;
    this.iterator = 0;
  } else {
    this.iterator += 1;
  }

  this.x += this.step;
};

Enemy.prototype.draw = function(interpolation) {
  this.context.save();
  this.context.translate(this.x, this.y);
  this.sprite.draw('default');
  this.context.restore();
};
