import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  fs.readFile(`${__dirname}/files/fileToRead.txt`, 'utf-8', (err, data) => {
    if (err) throw new Error('FS operation failed');

    console.log(data);
  });
};

read();
