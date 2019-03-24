// pub type AttrMap = HashMap<String, String>;
//
// #[derive(Debug)]
// pub struct Node {
//   // data common to all nodes:
//   pub children: Vec<Node>,
//
//     // data specific to each node type:
//     pub node_type: NodeType,
// }
//
// #[derive(Debug)]
// pub enum NodeType {
//   Element(ElementData),
//     Text(String),
// }
//
// #[derive(Debug)]
// pub struct ElementData {
//   pub tag_name: String,
//     pub attributes: AttrMap,
// }
class Node {
  constructor(children, nodeType) {
    this.children = children;
    this.nodeType = nodeType;
  }
}

class ElementData {
  constructor(tagName, attributes) {
    this.tagName = tagName;
    this.attributes = attributes;
  }
}

const NodeType = {};
// props have to be array
NodeType.Element = class {
  constructor(props) {
    this.props = props;
  }
};
NodeType.Text = class {
  constructor(props) {
    this.props = props;
  }
};

module.exports.Node = Node;
module.exports.ElementData = ElementData;
module.exports.NodeType = NodeType;
