Keyboard = ->
  update: (object) ->
    object.y -= object.step  if Key.isDown(Key.UP)
    object.y += object.step  if Key.isDown(Key.DOWN)
    object.x -= object.step  if Key.isDown(Key.LEFT)
    object.x += object.step  if Key.isDown(Key.RIGHT)
    object.shoot()  if Key.isDown(Key.SPACE)

window.Keyboard = Keyboard

