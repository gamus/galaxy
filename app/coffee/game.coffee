class Game
  construct: (context, options, callback) ->
    @FPS = 60

    options = options or {}
    @bullets = []
    @enemies = []

    # TODO: place levels into separate models like Level
    # for working generating level world using simple
    # methods.
    @levels = []
    @context = context
    @width = options.width or 640
    @height = options.height or 480
    @player = new Player(this)

  init = ->
    # By default we are selectin the first level.
    @level = Levels.levels[0]()
    @enemies = @level.enemies

  draw = (interpolation) ->
    @context.clearRect 0, 0, @width, @height
    @player.draw interpolation
    i = 0

    while i < @enemies.length
      @enemies[i].draw interpolation
      i++
    i = 0

    while i < @bullets.length
      @bullets[i].draw interpolation
      i++

    update = ->
      @player.update()
      i = 0

      while i < @enemies.length
        @enemies[i].update()
        i++
      i = 0

      while i < @bullets.length
        @bullets[i].update()
        i++

    run = (->
      loops = 0
      skipTicks = 1000 / Game.FPS
      maxFrameSkip = 10
      nextGameTick = (new Date).getTime()
      ->
        loops = 0
        while (new Date).getTime() > nextGameTick
          @update()
          nextGameTick += skipTicks
          loops++
        unless loops
          @draw (nextGameTick - (new Date).getTime()) / skipTicks
        else
          @draw 0

