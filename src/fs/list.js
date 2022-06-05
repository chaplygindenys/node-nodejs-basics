import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  fs.readdir(__dirname + '/files', err => {
    if (err) {
      throw new Error('FS operation failed');
    }

    fs.readdir(__dirname + '/files', (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
  });
};

list();
