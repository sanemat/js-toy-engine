const {
  Rect,
  LayoutBox,
  BoxType,
  EdgeSizes,
  Dimensions
} = require("../lib/layout");

test("rect", () => {
  expect(new Rect(1, 2, 3, 4).height).toBe(4);
});

test("layout box", () => {
  expect(LayoutBox.create(new BoxType.BlockNode(["props"]))).toBeInstanceOf(
    LayoutBox
  );
});

test("expandedBy", () => {
  expect(new Rect(12, 13, 4, 5).expandedBy(new EdgeSizes(1, 2, 3, 4))).toEqual(
    new Rect(11, 10, 7, 12)
  );
});

test("Dimensions#paddingBox", () => {
  expect(
    new Dimensions(
      new Rect(12, 13, 4, 5),
      new EdgeSizes(1, 2, 3, 4),
      new EdgeSizes(1, 2, 3, 4),
      new EdgeSizes(1, 2, 3, 4)
    ).paddingBox()
  ).toEqual(new Rect(11, 10, 7, 12));
});
