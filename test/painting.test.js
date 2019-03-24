const { DisplayCommand } = require("../lib/painting");
const { Color } = require("../lib/css");
const { Rect } = require("../lib/layout");

test("display command", () => {
  expect(
    new DisplayCommand.SolidColor([new Color(0, 0, 0, 0), new Rect(0, 0, 0, 0)])
      .props
  ).toEqual([new Color(0, 0, 0, 0), new Rect(0, 0, 0, 0)]);
});
