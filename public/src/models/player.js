var Player = function(game) {
  this.game = game;
  this.context = this.game.context;
  this.width = 35;
  this.height = 35;
  this.step = 5;
  this.DEFAULT_STEP = 5;

  // setup startup position for player
  this.x = this.game.width / 2;
  this.y = this.game.height - this.height;

  this.key = Key.UP;

  var map = {};
  map[Key.LEFT]   = { x: 0,  y: 0 };
  map[Key.RIGHT]  = { x: 0,  y: 0 };
  map[Key.UP]     = { x: 0,  y: 0 };
  map[Key.DOWN]   = { x: 0,  y: 0 };
  map[Key.SPACE]  = { x: 0,  y: 0 };

  this.sprite = new Sprite(this.context, {
    url: './images/ship.png',
    width: this.width,
    height: this.height,
    map: map
  });

  this.life = 10;

  this.next_shoot_time = new Date().getTime();
  this.shoot_delay = 400;

  this.input = new Keyboard();
};

Player.prototype.die = function() {
  // Place there label drawing with game over information.
  console.log("end game");
};

Player.prototype.update = function() {
  this.ensurePosition();

  this.input.update(this);

  this.collisions();
};

Player.prototype.collisions = function() {
};

Player.prototype.shoot = function() {
  Key.remove(Key.SPACE);

  if (this.next_shoot_time < new Date().getTime()) {
    this.next_shoot_time = new Date().getTime() + this.shoot_delay;

    this.game.bullets.push(new Bullet(this, {
      x: this.x + this.width/2 - 4,
      y: this.y
    }));
  }
};

Player.prototype.ensurePosition = function() {
  if (this.x < 0) this.x = 0;
  if (this.y <= 0) this.y = 0;
  if (this.x >= this.game.width - this.width) this.x = this.game.width - this.width;
  if (this.y >= this.game.height - this.height) this.y = this.game.height - this.height;
};

Player.prototype.draw = function() {
  this.context.save();
  this.context.translate(this.x, this.y);
  this.sprite.draw(this.key);
  this.context.restore();
};

