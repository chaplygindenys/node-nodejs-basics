import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  fs.readFile(__dirname + '/files/fileToRemove.txt', err => {
    if (err) throw new Error('FS operation failed');

    fs.unlink(__dirname + '/files/fileToRemove.txt', err => {
      if (err) throw err;
    });
  });
};

remove();
