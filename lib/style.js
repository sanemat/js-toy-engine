// /// Map from CSS property names to values.
// pub type PropertyMap =  HashMap<String, Value>;
//
// /// A node with associated style data.
// pub struct StyledNode<'a> {
// pub node: &'a Node,
// pub specified_values: PropertyMap,
//   pub children: Vec<StyledNode<'a>>,
// }
class StyledNode {
  constructor(node, specifiedValues, children) {
    this.node = node;
    // specifiedValues is Map
    this.specifiedValues = specifiedValues;
    this.children = children;
  }
  value(name) {
    return this.specifiedValues.get(name);
  }
}

module.exports.StyledNode = StyledNode;
