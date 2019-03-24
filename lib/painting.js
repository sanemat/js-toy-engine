// #[derive(Debug)]
// pub enum DisplayCommand {
//   SolidColor(Color, Rect),
// }
//
// pub type DisplayList = Vec<DisplayCommand>;
// no type alias in js :)
const { Color, Value } = require("./css");
const { BoxType } = require("./layout");
const DisplayCommand = {};

// props have to be array
DisplayCommand.SolidColor = class {
  constructor(props) {
    this.props = props;
  }
};
const getColor = (layoutBox, name) => {
  const boxType = layoutBox.boxType;
  if (
    !(boxType instanceof BoxType.BlockNode) &&
    !(boxType instanceof BoxType.InlineNode)
  ) {
    return null;
  }
  const styleNode = boxType.props[0];
  const cssValue = styleNode.value(name);
  if (!(cssValue instanceof Value.ColorValue)) {
    return null;
  }
  return cssValue.props[0];
};

module.exports.DisplayCommand = DisplayCommand;
module.exports.getColor = getColor;
