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
