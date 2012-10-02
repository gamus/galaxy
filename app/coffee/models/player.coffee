class Player
  constructor: (game) ->
    @game = game
    @context = @game.context
    @width = 35
    @height = 35
    @step = 5
    @DEFAULT_STEP = 5

    # setup startup position for player
    @x = @game.width / 2
    @y = @game.height - @height
    @key = Key.UP
    map = {}
    map[Key.LEFT] = x: 0, y: 0
    map[Key.RIGHT] = x: 0, y: 0
    map[Key.UP] =  x: 0, y: 0
    map[Key.DOWN] = x: 0, y: 0
    map[Key.SPACE] = x: 0, y: 0

    @sprite = new Sprite(@context,
      url: "./images/ship.png"
      width: @width
      height: @height
      map: map
    )
    @life = 10
    @next_shoot_time = new Date().getTime()
    @shoot_delay = 400
    @input = new Keyboard()

  die = ->
    # Place there label drawing with game over information.
    console.log "end game"

  update = ->
    @ensurePosition()
    @input.update this

  shoot = ->
    Key.remove Key.SPACE
    if @next_shoot_time < new Date().getTime()
      @next_shoot_time = new Date().getTime() + @shoot_delay
      @game.bullets.push new Bullet(this,
        x: @x + @width / 2 - 4
        y: @y
      )

  ensurePosition = ->
    @x = 0  if @x < 0
    @y = 0  if @y <= 0
    @x = @game.width - @width  if @x >= @game.width - @width
    @y = @game.height - @height  if @y >= @game.height - @height

  draw = ->
    @context.save()
    @context.translate @x, @y
    @sprite.draw @key
    @context.restore()

