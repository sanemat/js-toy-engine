// /// Map from CSS property names to values.
// pub type PropertyMap =  HashMap<String, Value>;
//
// /// A node with associated style data.
// pub struct StyledNode<'a> {
// pub node: &'a Node,
// pub specified_values: PropertyMap,
//   pub children: Vec<StyledNode<'a>>,
// }
class StyleNode {
  constructor(node, specifiedValues, children) {
    this.node = node;
    this.specifiedValues = specifiedValues;
    this.children = children;
  }
}

module.exports.StyleNode = StyleNode;
