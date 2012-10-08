class Enemy
  constructor: (options) ->
    @options = options

    @width = 35
    @height = 35

    @x = options.x or (options.positionX * @width)
    @y = options.y or (options.positionY * @height)
    map = {}
    map["default"] = x: 0, y: 0

    @iterator = 0
    @step = 2
    @life = 5
    @scale = 1
    @scaleStep = 0.05

  die: ->
    game.enemies.remove @

  draw: ->
    context.save()
    context.translate @x, @y
    @sprite.draw "default"
    context.restore()

  update = ->
    if @iterator >= 50
      @step = (if @step < 0 then 2 else -2)
      @iterator = 0
    else
      @iterator += 1
    @x += @step

window.Enemy = Enemy

