function sum(a, b) {
  return a + b;
}

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

module.exports = sum;
module.exports.Rect = Rect;
