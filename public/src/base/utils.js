Array.prototype.remove = function(object) {
  for(var i = 0; i < this.length; i++) {
    if (this[i] == object) {
      this.splice(i,1);
      break;
    }
  }
  return object;
};

Array.prototype.clone = function() {
  return this.slice(0);
};

function extend(B, A){
  function I(){};
  I.prototype = A.prototype;
  B.prototype = new I;
  B.prototype.constructor = B;
};
