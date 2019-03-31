const pngjs = require("pngjs");
const { Canvas, DisplayCommand } = require("../lib/painting");
const { Color } = require("../lib/css");
const { Rect } = require("../lib/layout");
const canvas = Canvas.create(200, 100);
canvas.paintItem(
  new DisplayCommand.SolidColor([
    new Color(0, 0, 0, 255),
    new Rect(0, 0, 10, 10)
  ])
);

const png = new pngjs.PNG({ width: canvas.width, height: canvas.height });
png.data = canvas.pixels.reduce(
  (acc, color) => acc.concat([color.r, color.g, color.b, color.a]),
  []
);

png.pack().pipe(process.stdout);
