class Enemy1 extends Enemy
  constructor: (options) ->
    @sprite = new Sprite(
      url: "./images/enemy01.png"
      width: @width
      height: @height
      map: map
    )

window.Enemy1 = Enemy1

