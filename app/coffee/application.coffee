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
  context = canvas.getContext("2d")
  game = new Game(
    width: canvas.width
    height: canvas.height
  )

  window.onEachFrame game.run()

