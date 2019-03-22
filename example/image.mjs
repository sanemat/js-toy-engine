import fs from 'fs';
import path from 'path';
const __dirname = path.join(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
import pngjs from 'pngjs';
const newfile = new pngjs.PNG({ width: 10, height: 10 });
for (let y = 0; y < newfile.height; y++) {
  for (let x = 0; x < newfile.width; x++) {
    const idx = (newfile.width * y + x) << 2;

    const col = x < (newfile.width >> 1) ^ y < (newfile.height >> 1) ? 0xe5 : 0xff;

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
