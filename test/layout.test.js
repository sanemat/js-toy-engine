const { Rect, LayoutBox, BoxType } = require('../lib/layout');

test('rect', () => {
  expect(new Rect(1, 2, 3, 4).height).toBe(4);
});

test('layout box', () => {
  expect(LayoutBox.create(BoxType.BlockNode)).toBeInstanceOf(LayoutBox);
});
