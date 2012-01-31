var Enemy = function(game) {
  this.game = game;
  this.context = this.game.context;

  var map = {};
  map['default'] = { x: 0, y: 0 };

  this.width = 45;
  this.height = 52;

  this.sprite = new Sprite(this.context, {
    url: './images/enemy.gif',
    width: this.width,
    height: this.height,
    map: map
  });
};

Enemy.prototype.update = function() {
  // TODO: here I should place logic of enemy movements
  // because it's really the main part of generic AI force. :)
};

Enemy.prototype.draw = function(interpolation) {
  this.context.save();
  this.context.translate(Math.random() * 10, 0);
  this.sprite.draw('default');
  this.context.restore();
};
