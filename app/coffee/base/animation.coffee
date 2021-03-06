# shim layer with setTimeout fallback
window.requestAnimFrame = (->
  window.requestAnimationFrame or window.webkitRequestAnimationFrame or window.mozRequestAnimationFrame or window.oRequestAnimationFrame or window.msRequestAnimationFrame or (callback) ->
    window.setTimeout(callback, 1000 / 60)
)()

window.onEachFrame = (callback) ->
  _cb = ->
    callback()
    requestAnimFrame _cb

  _cb()

