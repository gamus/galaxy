# Map should have default width and height as 10 objects
class Level
  constructor: (game, options) ->
    @game = game
    @map = options.map
    @generate()

  generate = ->
    for row, i in @map
      for column, j in row
        options =
          positionX: j
          positionY: i

        enemy = new window["Enemy#{column}"](@game, options)
        @enemies.push enemy

