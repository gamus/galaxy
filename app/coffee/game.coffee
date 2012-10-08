class Game
  construct: (options) ->
    @FPS = 60

    options = options or {}

    @width = options.width or 640
    @height = options.height or 480
    @player = new Player(this)

  draw: (interpolation) ->
    @context.clearRect 0, 0, @width, @height
    @player.draw interpolation

    enemy.draw interpolation for enemy in @enemies
    bullet.draw interpolation for bullet in @bullets

  update: ->
    @player.update()

    enemy.update() for enemy in (@enemies or [])
    bullet.update() for bullet in (@bullets or [])

  run: ->
    loops = 0
    skipTicks = 1000 / Game.FPS
    maxFrameSkip = 10
    nextGameTick = (new Date).getTime()

    =>
      loops = 0
      while (new Date).getTime() > nextGameTick
        @update()
        nextGameTick += skipTicks
        loops++
      unless loops
        @draw (nextGameTick - (new Date).getTime()) / skipTicks
      else
        @draw 0

window.Game = Game
