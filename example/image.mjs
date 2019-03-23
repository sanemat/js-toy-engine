import fs from 'fs';
import path from 'path';
const __dirname = path.join(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
import pngjs from 'pngjs';
const width = 10;
const height = 10;
const buffer = new Buffer.alloc(2 * width * height * 4);
const bitmap = new Uint16Array(buffer.buffer);
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    bitmap[i * 4 * width + 4*j] = i * 65535 / height;
    bitmap[i * 4 * width + 4*j + 1] = j * 65535 / width;
    bitmap[i * 4 * width + 4*j + 2] = (height-i) * 65535 / height;
    bitmap[i * 4 * width + 4*j + 3] = 65535;
  }
}
const newfile = new pngjs.PNG({ width: width, height: height });
newfile.data = buffer;

newfile.pack()
  .pipe(fs.createWriteStream(__dirname + '/newfile.png'))
  .on('finish', function() {
    console.log('Written!');
  });
