class Enemy
  constructor: (options) ->
    @options = options

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

