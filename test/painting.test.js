const {
  DisplayCommand,
  getColor,
  renderBackground,
  Canvas
} = require("../lib/painting");
const { Color, Value } = require("../lib/css");
const {
  Rect,
  LayoutBox,
  BoxType,
  EdgeSizes,
  Dimensions
} = require("../lib/layout");
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

test("render background with color", () => {
  const displayList = [];
  renderBackground(
    displayList,
    new LayoutBox(
      new Dimensions(
        new Rect(20, 30, 5, 5),
        new EdgeSizes(2, 3, 4, 5),
        new EdgeSizes(2, 3, 4, 5),
        new EdgeSizes(2, 3, 4, 5)
      ),
      new BoxType.BlockNode([
        new StyledNode(
          new Node([], new NodeType.Text(["text"])),
          new Map([
            ["background", new Value.ColorValue([new Color(0, 0, 0, 0)])]
          ]),
          []
        )
      ]),
      []
    )
  );
  expect(displayList[0]).toEqual(
    new DisplayCommand.SolidColor([
      new Color(0, 0, 0, 0),
      new Rect(16, 22, 15, 23)
    ])
  );
});

test("render background no color", () => {
  const displayList = [];
  renderBackground(
    displayList,
    new LayoutBox(
      new Dimensions(
        new Rect(20, 30, 5, 5),
        new EdgeSizes(2, 3, 4, 5),
        new EdgeSizes(2, 3, 4, 5),
        new EdgeSizes(2, 3, 4, 5)
      ),
      new BoxType.BlockNode([
        new StyledNode(new Node([], new NodeType.Text(["text"])), new Map(), [])
      ]),
      []
    )
  );
  expect(displayList.length).toBe(0);
});

test("canvas pixels length", () => {
  const canvas = Canvas.create(2, 3);
  expect(canvas.pixels.length).toEqual(6);
});
