var Levels = [];

Levels.generate = function(game) {
  Levels.levels = [];

  var level01 = function() {
    return new Level(game, {
      name: 'Level 1',
      map: [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
    });
  };

  var level02 = function() {
    return new Level(game, {
      name: 'Level 2',
      map: [[0, 1, 0, 0, 1, 1, 0, 0, 1, 0]]
    });
  };

  var level03 = function() {
    return new Level(game, {
      name: 'Level 3',
      map: [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0]
      ]
    });
  };

  Levels.levels.push(level03);
  Levels.levels.push(level02);
  Levels.levels.push(level01);
};
