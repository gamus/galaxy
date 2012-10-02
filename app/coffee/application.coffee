# Initialize here application
# 1. Retrieve game graphics
# 2. Load to the scenes
# 3. Start game rendering and updating process on each frame
#

window.onload = ->
  # setup events for game
  window.addEventListener "keyup", ((event) ->
    Key.onKeyup event
  ), false
  window.addEventListener "keydown", ((event) ->
    Key.onKeydown event
  ), false
  canvas = document.getElementById("canvas-container")
  context = canvas.getContext("2d")
  game = new Game(context,
    width: canvas.width
    height: canvas.height
  )

  # Generate levesl for game.
  Levels.generate game
  game.init()
  window.onEachFrame ->
    game.run.call game

