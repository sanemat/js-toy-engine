const { Value } = require("../lib/css");

test("keyword", () => {
  expect(new Value.Keyword(["keyword"]).props).toEqual(["keyword"]);
});
