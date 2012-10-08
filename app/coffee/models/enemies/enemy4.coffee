class Enemy4
  constructor: (options) ->
    @sprite = new Sprite(
      url: "./images/enemy04.png"
      width: @width
      height: @height
      map: map
    )

window.Enemy4 = Enemy4

