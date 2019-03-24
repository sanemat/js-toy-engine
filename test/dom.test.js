const { ElementData } = require("../lib/dom");

test("element data", () => {
  expect(new ElementData("First", new Map()).tagName).toEqual("First");
});
