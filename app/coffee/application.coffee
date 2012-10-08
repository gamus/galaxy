# Initialize here application
# 1. Retrieve game graphics
# 2. Load to the scenes
# 3. Start game rendering and updating process on each frame
#

window.onload = ->
  window.addEventListener "keyup", ((event) ->
    Key.onKeyup event
  ), false

  window.addEventListener "keydown", ((event) ->
    Key.onKeydown event
  ), false

  canvas = document.getElementById("canvas-container")

  levels = new Levels()

  game = new Game(
    levels,
    width: canvas.width
    height: canvas.height
  )
  game.start()

  window.context = canvas.getContext("2d")
  window.game = game

  window.onEachFrame game.run()

