const { StyledNode } = require("../lib/style");
const { Node, NodeType } = require("../lib/dom");
const { Color, Value } = require("../lib/css");

test("styled node", () => {
  expect(
    new StyledNode(new Node([], new NodeType.Text(["text"])), new Map(), [])
      .specifiedValues
  ).toEqual(new Map());
});

test("styled node value", () => {
  expect(
    new StyledNode(
      new Node([], new NodeType.Text(["text"])),
      new Map([["example", new Value.ColorValue([new Color(0, 0, 0, 0)])]]),
      []
    ).value("example")
  ).toEqual(new Value.ColorValue([new Color(0, 0, 0, 0)]));
});
