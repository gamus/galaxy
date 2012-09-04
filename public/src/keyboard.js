var Keyboard = function() {
};

Keyboard.prototype.update = function(object) {
  if (Key.isDown(Key.UP))    object.y -= object.step;
  if (Key.isDown(Key.DOWN))  object.y += object.step;
  if (Key.isDown(Key.LEFT))  object.x -= object.step;
  if (Key.isDown(Key.RIGHT)) object.x += object.step;
  if (Key.isDown(Key.SPACE)) object.shoot();
};

