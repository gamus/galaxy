class Enemy3 extends Enemy
  constructor: (options) ->
    sprite = new Sprite(
      url: "./images/enemy03.png"
      width: @width
      height: @height
      map: map
    )

window.Enemy3 = Enemy3

