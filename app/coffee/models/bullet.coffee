class Bullet
  constructor: (options) ->
    [@width, @height, @step] = [8, 8, 2]

    @x = options.x
    @y = options.y

    @map = default: x: 0, y: 0
    @sprite = new Sprite(
      url: './images/bullet.png',
      width: @width,
      height: @height,
      map: @map
    )

  update: ->
    @y -= @step
    @die() if @y < 0

  die: ->
    game.enemies.remove(@)

  draw: (interpolation) ->
    context.save()
    context.translate @x, @y
    @sprite.draw 'default'
    context.restore()

window.Bullet = Bullet

