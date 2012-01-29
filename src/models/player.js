var Player = function(game) {
  this.game = game;
  this.context = this.game.context;

  this.x = 0;
  this.y = 0;
};

Player.prototype.update = function() {
  if (Key.isDown(Key.UP)) this.moveUp();
  if (Key.isDown(Key.LEFT)) this.moveLeft();
  if (Key.isDown(Key.DOWN)) this.moveDown();
  if (Key.isDown(Key.RIGHT)) this.moveRight();
};

Player.prototype.moveUp = function() {
  this.y -= 1;
};

Player.prototype.moveDown = function() {
  this.y += 1;
};

Player.prototype.moveRight = function() {
  this.x += 1;
};

Player.prototype.moveLeft = function() {
  this.x -= 1;
};

Player.prototype.draw = function() {
  this.context.fillStyle = "rgba(0, 0, 200, 0.5)";
  this.context.fillRect(this.x, this.y, 32, 32);
};
