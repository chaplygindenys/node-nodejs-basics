import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  fs.writeFile(__dirname + '/files/fresh.txt', 'I am fresh and young', { flag: 'ax' }, err => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

create();
