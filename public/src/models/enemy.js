var Enemy = function(game, options) {
  this.game = game;
  this.context = this.game.context;
};

Enemy.prototype.die = function() {
  this.game.enemies.remove(this);
};

Enemy.prototype.draw = function() {
  this.context.save();
  this.context.translate(this.x, this.y);
  this.sprite.draw('default');
  this.context.restore();
};

Enemy.prototype.update = function() {
  if (this.iterator >= 50) {
    this.step = this.step < 0 ? 2 : -2;
    this.iterator = 0;
  } else {
    this.iterator += 1;
  }

  this.x += this.step;
};

