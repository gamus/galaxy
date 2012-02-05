// Map should have default width and height as 10 objects
var Level = function(game, options) {
  this.game = game;
  this.name = options.name;
  this.map = options.map;
  this.enemies = [];

  this.generate();
};

// Generate collection of enemies for setting on the certain positions
Level.prototype.generate = function() {
  for(var i = 0; i < this.map.length; i++) {
    var line = this.map[i];

    for(var j = 0; j < line.length; j++) {
      var element = line[j];
      var options = {
        positionX: j,
        positionY: i
      };
      switch(element) {
        case 1:
          this.enemies.push(new Enemy1(this.game, options));
          break;
        case 2:
          this.enemies.push(new Enemy2(this.game, options));
          break;
        case 3:
          this.enemies.push(new Enemy3(this.game, options));
          break;
        case 4:
          this.enemies.push(new Enemy4(this.game, options));
          break;
        case 5:
          this.enemies.push(new Enemy5(this.game, options));
          break;
      }
    }// end for
  }// end for

  return this.enemies;
};
