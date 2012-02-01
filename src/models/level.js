// Map should have default width and height as 10 objects
var Level = function(game, options) {
  this.game = game;
  this.name = options.name;
  this.map = options.map;
  this.enemies = [];

  this.generate();
};

Level.ENEMY = 1;

// Generate collection of enemies for setting on the certain positions
Level.prototype.generate = function() {
  for(var i = 0; i < this.map.length; i++) {
    var line = this.map[i];

    for(var j = 0; j < line.length; j++) {
      var element = line[j];
      if (element === Level.ENEMY) {
        this.enemies.push(new Enemy(this.game, {
          positionX: j,
          positionY: i
        }));
      }
    }// end for
  }// end for

  return this.enemies;
};
