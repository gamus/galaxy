class Enemy2 extends Enemy
  constructor: (options) ->
    super options

    @sprite = new Sprite(
      url: "./images/enemy02.png"
      width: @width
      height: @height
      map: @map
    )

window.Enemy2 = Enemy2

