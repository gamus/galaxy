# Map should have default width and height as 10 objects
class Level
  constructor: (options) ->
    @name = options.name
    @map = options.map
    @enemies = []
    @generate()

  generate: ->
    for row, i in @map
      for column, j in row
        options =
          positionX: j
          positionY: i

        enemy = new window["Enemy#{column + 1}"](options)
        @enemies.push enemy

window.Level = Level

