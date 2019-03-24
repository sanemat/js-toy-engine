const { StyleNode } = require("../lib/style");
const { Node, NodeType } = require("../lib/dom");

test("style node", () => {
  expect(
    new StyleNode(new Node([], new NodeType.Text(["text"])), new Map(), [])
      .specifiedValues
  ).toEqual(new Map());
});
