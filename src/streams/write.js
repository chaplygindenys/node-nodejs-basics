import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  let stream = process.stdin;
  let writeableStream = fs.createWriteStream(__dirname + '/files/fileToWrite.txt');
  stream.pipe(writeableStream);
};

write();
