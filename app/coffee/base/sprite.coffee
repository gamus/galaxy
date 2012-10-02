Sprite = (context, options) ->
  options = options or {}
  @context = context
  @image = new Image()
  @image.src = options.url
  @width = options.width
  @height = options.height
  @map = options.map
  @times = 1

Sprite::scale = (times) ->
  @times = times

Sprite::draw = (step) ->
  pos = @map[step]
  @context.save()
  @context.scale @times, @times
  @context.drawImage @image, pos.x, pos.y, @width, @height, 0, 0, @width, @height
  @context.restore()

window.Sprite = Sprite

