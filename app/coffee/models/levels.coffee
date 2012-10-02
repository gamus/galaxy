Levels = []
Levels.generate = (game) ->
  Levels.levels = []
  level01 = ->
    new Level(game,
      name: "Level 1"
      map: [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
    )

  level02 = ->
    new Level(game,
      name: "Level 2"
      map: [[0, 1, 0, 0, 1, 1, 0, 0, 1, 0]]
    )

  level03 = ->
    new Level(game,
      name: "Level 3"
      map: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
    )

  Levels.levels.push level03
  Levels.levels.push level02
  Levels.levels.push level01

