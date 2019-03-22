const buffer = ["123", "456"];
import { promisify } from 'util';
import Jimp from 'jimp';
promisify(new Jimp({ data: buffer, width: 10, height: 10 })
).then((image) => {
  console.log(image);
}).catch((error) => {
  console.error(error);
});
