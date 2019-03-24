// #[derive(Debug)]
// pub enum DisplayCommand {
//   SolidColor(Color, Rect),
// }
//
// pub type DisplayList = Vec<DisplayCommand>;
// no type alias in js :)
const DisplayCommand = {};

// props have to be array
DisplayCommand.SolidColor = class {
  constructor(props) {
    this.props = props;
  }
};

module.exports.DisplayCommand = DisplayCommand;
