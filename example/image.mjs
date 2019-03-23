import fs from 'fs';
import path from 'path';
const __dirname = path.join(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
import pngjs from 'pngjs';
const width = 10;
const height = 10;
const newfile = new pngjs.PNG({ width: width, height: height });
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (width * y + x) << 2;

    const col = x < (width >> 1) ^ y < (height >> 1) ? 0xe5 : 0xff;

    newfile.data[idx] = col;
    newfile.data[idx + 1] = col;
    newfile.data[idx + 2] = col;
    newfile.data[idx + 3] = 0xff;
  }
}

newfile.pack()
  .pipe(fs.createWriteStream(__dirname + '/newfile.png'))
  .on('finish', function() {
    console.log('Written!');
  });
