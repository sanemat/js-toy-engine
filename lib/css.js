// #[derive(Debug, Clone, PartialEq)]
// pub enum Value {
//   Keyword(String),
//     Length(f32, Unit),
//     ColorValue(Color),
// }
//
// #[derive(Debug, Clone, PartialEq, Default)]
// pub struct Color {
//   pub r: u8,
//     pub g: u8,
//     pub b: u8,
//     pub a: u8,
// }

// props have to be array
const Value = {};
Value.Keyword = class {
  constructor(props) {
    this.props = props;
  }
};
Value.Length = class {
  constructor(props) {
    this.props = props;
  }
};
Value.ColorValue = class {
  constructor(props) {
    this.props = props;
  }
};

class Color {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
module.exports.Value = Value;
module.exports.Color = Color;
