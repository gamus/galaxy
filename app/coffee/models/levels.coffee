class Levels
  constructor: () ->
    @levels = []
    @generate()

  build: (index) ->
    new Level(@levels[index])

  generate: ->
    level01 =
      name: "Level 1"
      map: [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

    level02 =
      name: "Level 2"
      map: [[0, 1, 0, 0, 1, 1, 0, 0, 1, 0]]

    level03 =
      name: "Level 3"
      map: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

    @levels.push level01
    @levels.push level02
    @levels.push level03

window.Levels = Levels

