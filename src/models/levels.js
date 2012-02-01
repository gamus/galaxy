var Levels = [];

Levels.generate = function(game) {
  Levels.levels = [];

  var level01 = function() {
    return new Level(game, {
      name: 'Tutorial Level',
      map: [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
    });
  };

  Levels.levels.push(level01);
};
