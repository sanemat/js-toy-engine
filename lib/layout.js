class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class Dimensions {
  constructor(content, padding, border, margin) {
    this.content = content;
    this.padding = padding;
    this.border = border;
    this.margin = margin;
  }
}

class EdgeSizes {
  constructor(left, right, top, bottom) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
}

class LayoutBox {
  constructor(dimensions, boxType, children) {
    this.dimensions = dimensions;
    this.boxType = boxType;
    this.children = children;
  }
}

module.exports.Rect = Rect;
module.exports.Dimensions = Dimensions;
module.exports.EdgeSizes =EdgeSizes;
module.exports.LayoutBox = LayoutBox;
