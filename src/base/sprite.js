var Sprite = function(context, options) {
  options = options || {};

  this.context = context;
  this.image = new Image();
  this.image.src = options.url;
  this.width = options.width;
  this.height = options.height;
  this.map = options.map;
  this.times = 1;
};

Sprite.prototype.scale = function(times) {
  this.times = times;
};

Sprite.prototype.draw = function(step) {
  var pos = this.map[step];
  this.context.save();
  this.context.scale(this.times, this.times);
  this.context.drawImage(this.image, pos.x, pos.y, this.width,
    this.height, 0, 0, this.width, this.height);
  this.context.restore();
};
