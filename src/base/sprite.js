var Sprite = function(context, options) {
  options = options || {};

  this.context = context;
  this.image = new Image();
  this.image.src = options.url;
  this.width = options.width;
  this.height = options.height;
  this.map = options.map;
};

Sprite.prototype.draw = function(step) {
  var pos = this.map[step];
  this.context.drawImage(this.image, pos.x, pos.y, this.width, this.height,
                         0, 0, this.width, this.height);
};
