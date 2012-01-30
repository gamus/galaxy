var Player = function(game) {
  this.game = game;
  this.context = this.game.context;
  this.width = 65;
  this.height = 85;
  this.step = 5;
  // setup startup position for player
  this.x = this.game.width / 2;
  this.y = this.game.height - this.height;

  this.key = Key.UP;

  var map = {};
  map[Key.LEFT]  = { x: 83,  y: 0 };
  map[Key.RIGHT] = { x: 156, y: 0 };
  map[Key.UP]    = { x: 10,  y: 0 };
  map[Key.DOWN]  = { x: 10,  y: 0 };

  this.sprite = new Sprite(this.context, {
    url: './images/ship.png',
    width: this.width,
    height: this.height,
    map: map
  });
};

Player.prototype.update = function() {
  if (Key.isDown(Key.UP)) this.moveUp();
  if (Key.isDown(Key.LEFT)) this.moveLeft();
  if (Key.isDown(Key.DOWN)) this.moveDown();
  if (Key.isDown(Key.RIGHT)) this.moveRight();
  this.ensurePosition();
};

Player.prototype.moveUp = function() {
  this.key = Key.UP;
  this.y -= this.step;
};

Player.prototype.moveDown = function() {
  this.key = Key.DOWN;
  this.y += this.step;
};

Player.prototype.moveRight = function() {
  this.key = Key.RIGHT;
  this.x += this.step;
};

Player.prototype.moveLeft = function() {
  this.key = Key.LEFT;
  this.x -= this.step;
};

Player.prototype.ensurePosition = function() {
  if (this.x <= 0) this.x = 0;
  if (this.y <= 0) this.y = 0;
  if (this.x >= this.game.width - this.width) this.x = this.game.width - this.width;
  if (this.y <= (this.game.height - this.height) / 2) this.y = (this.game.height - this.height) / 2;
  if (this.y >= this.game.height - this.height) this.y = this.game.height - this.height;
};

Player.prototype.draw = function() {
  this.context.save();
  this.context.translate(this.x, this.y);
  this.sprite.draw(this.key);
  this.context.restore();
};

