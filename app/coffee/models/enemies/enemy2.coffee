class Enemy2 extends Enemy
  constructor: (options) ->
    @sprite = new Sprite(
      url: "./images/enemy02.png"
      width: @width
      height: @height
      map: map
    )

window.Enemy2 = Enemy2

