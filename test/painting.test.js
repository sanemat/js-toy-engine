const { DisplayCommand, getColor } = require("../lib/painting");
const { Color, Value } = require("../lib/css");
const { Rect, LayoutBox, BoxType } = require("../lib/layout");
const { Node, NodeType } = require("../lib/dom");
const { StyledNode } = require("../lib/style");

test("display command", () => {
  expect(
    new DisplayCommand.SolidColor([new Color(0, 0, 0, 0), new Rect(0, 0, 0, 0)])
      .props
  ).toEqual([new Color(0, 0, 0, 0), new Rect(0, 0, 0, 0)]);
});

test("get color", () => {
  expect(
    getColor(
      LayoutBox.create(
        new BoxType.BlockNode([
          new StyledNode(
            new Node([], new NodeType.Text(["text"])),
            new Map([
              ["example", new Value.ColorValue([new Color(0, 0, 0, 0)])]
            ]),
            []
          )
        ])
      ),
      "example"
    )
  ).toEqual(new Color(0, 0, 0, 0));
});

test("get no color", () => {
  expect(
    getColor(
      LayoutBox.create(
        new BoxType.BlockNode([
          new StyledNode(
            new Node([], new NodeType.Text(["text"])),
            new Map(),
            []
          )
        ])
      ),
      "example"
    )
  ).toEqual(null);
});

test("get no color2", () => {
  expect(
    getColor(
      LayoutBox.create(
        new BoxType.BlockNode([
          new StyledNode(
            new Node([], new NodeType.Text(["text"])),
            new Map([["example", new Value.Keyword(["no color"])]]),
            []
          )
        ])
      ),
      "example"
    )
  ).toEqual(null);
});
