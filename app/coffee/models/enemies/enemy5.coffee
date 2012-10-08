class Enemy5 extends Enemy
  constructor: (options) ->
    @sprite = new Sprite(
      url: "./images/enemy05.png"
      width: @width
      height: @height
      map: map
    )

window.Enemy5 = Enemy5

