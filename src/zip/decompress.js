import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const read = fs.createReadStream(__dirname + '/archive.gz');
  const write = fs.createWriteStream(__dirname + '/files/fileToDecompress.txt');
  const unzip = zlib.createUnzip();

  pipeline(read, unzip, write, err => {
    if (err) {
      console.log(err);
    }
  });
};

decompress();
