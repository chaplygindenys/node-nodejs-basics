import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  fs.readdir(__dirname + '/files', (err, files) => {
    if (err) throw new Error('FS operation failed');

    fs.mkdir(__dirname + '/files_copy', err => {
      if (err) throw new Error('FS operation failed');

      files.forEach(file => {
        fs.copyFile(`${__dirname}/files/${file}`, `${__dirname}/files_copy/${file}`, err => {
          if (err) throw new Error('FS operation failed');
        });
      });
    });
  });
};

copy();
