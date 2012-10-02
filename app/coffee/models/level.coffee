# Map should have default width and height as 10 objects
class Level
  constructor: (game, options) ->
    @game = game
    @name = options.name
    @map = options.map
    @enemies = []
    @generate()


  generate = ->
    i = 0

    while i < @map.length
      line = @map[i]
      j = 0

      while j < line.length
        element = line[j]
        options =
          positionX: j
          positionY: i

        switch element
          when 1
            @enemies.push new Enemy1(@game, options)
          when 2
            @enemies.push new Enemy2(@game, options)
          when 3
            @enemies.push new Enemy3(@game, options)
          when 4
            @enemies.push new Enemy4(@game, options)
          when 5
            @enemies.push new Enemy5(@game, options)
        j++
      i++

    @enemies

