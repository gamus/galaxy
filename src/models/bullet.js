var Bullet = function(player, options) {
  this.game = player.game;
  this.enemies = this.game.enimies;
  this.player = player;
  this.context = player.context;
  this.width = 8;
  this.height = 8;

  // setup startup position for bulllet
  this.x = options.x;
  this.y = options.y;

  var map = {};
  map['default'] = { x: 0, y: 0 };

  this.sprite = new Sprite(this.context, {
    url: './images/bullet.png',
    width: this.width,
    height: this.height,
    map: map
  });
};

Bullet.prototype.update = function() {
  this.y -= 5;

  if(this.y < 0) {
    this.game.bullets.remove(this);
  }

  this.collisions();
};

Bullet.prototype.collisions = function() {
  var enemies = this.game.enemies.clone();
  for(var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i];

    if (Math.abs((this.y + this.height / 2) - (enemy.y + enemy.height / 2)) <= 10 &&
        Math.abs((this.x + this.width / 2) - (enemy.x + enemy.width / 2)) <= 10) {

      this.game.enemies.remove(enemy);
    }
  }
};

Bullet.prototype.draw = function() {
  this.context.save();
  this.context.translate(this.x, this.y);
  this.sprite.draw('default');
  this.context.restore();
};
