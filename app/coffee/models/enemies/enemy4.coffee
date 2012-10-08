class Enemy4 extends Enemy
  constructor: (options) ->
    super options

    @sprite = new Sprite(
      url: "./images/enemy04.png"
      width: @width
      height: @height
      map: @map
    )

window.Enemy4 = Enemy4

