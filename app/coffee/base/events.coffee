Key =
  _pressed: {}
  LEFT: 37
  UP: 38
  RIGHT: 39
  DOWN: 40
  SPACE: 32
  isDown: (keyCode) ->
    @_pressed[keyCode]

  onKeydown: (event) ->
    @_pressed[event.keyCode] = true

  onKeyup: (event) ->
    @remove event.keyCode

  remove: (key) ->
    delete @_pressed[key]

window.Key = Key

