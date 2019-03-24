class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  expandedBy(edgeSizes) {
    return new Rect(
      this.x - edgeSizes.left,
      this.y - edgeSizes.top,
      this.width + edgeSizes.left + edgeSizes.right,
      this.height + edgeSizes.top + edgeSizes.bottom
    );
  }
}

// props have to be array
const BoxType = {};
BoxType.BlockNode = class {
  constructor(props) {
    this.props = props;
  }
};
BoxType.InlineNode = class {
  constructor(props) {
    this.props = props;
  }
};
BoxType.AnonymousBlock = class {};

class Dimensions {
  constructor(content, padding, border, margin) {
    this.content = content;
    this.padding = padding;
    this.border = border;
    this.margin = margin;
  }
  // The area covered by the content area plus its padding.
  paddingBox() {
    return this.content.expandedBy(this.padding);
  }
  // The area covered by the content area plus padding and borders.
  borderBox() {
    return this.paddingBox().expandedBy(this.border);
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

  static create(boxType) {
    return new LayoutBox(
      new Dimensions(
        new Rect(0, 0, 0, 0),
        new EdgeSizes(0, 0, 0, 0),
        new EdgeSizes(0, 0, 0, 0),
        new EdgeSizes(0, 0, 0, 0)
      ),
      boxType,
      []
    );
  }
}

module.exports.Rect = Rect;
module.exports.Dimensions = Dimensions;
module.exports.EdgeSizes = EdgeSizes;
module.exports.LayoutBox = LayoutBox;
module.exports.BoxType = BoxType;
