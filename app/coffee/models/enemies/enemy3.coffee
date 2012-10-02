class Enemy3 extends Enemy
  constructor: (game, options) ->
    @game = game
    @context = @game.context
    @width = 35
    @height = 35

    # Startup positions should be set via level model.
    @x = options.x or (options.positionX * @width)
    @y = options.y or (options.positionY * @height)
    map = {}
    map["default"] =
      x: 0
      y: 0

    @sprite = new Sprite(@context,
      url: "./images/enemy03.png"
      width: @width
      height: @height
      map: map
    )

    # This variable for creating circular movements for group of enimies.
    @iterator = 0
    @step = 2
    @life = 5
    @scale = 1
    @scaleStep = 0.05

