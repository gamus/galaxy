extend = (B, A) ->
  I = ->
  I:: = A::
  B:: = new I
  B::constructor = B
Array::remove = (object) ->
  i = 0

  while i < @length
    if this[i] is object
      @splice i, 1
      break
    i++
  object

Array::clone = ->
  @slice 0

bind = (fn, me) ->
  ->
    fn.apply me, arguments_
