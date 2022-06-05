import crypto from 'crypto';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const readableStream = fs.createReadStream(__dirname + '/files/fileToCalculateHashFor.txt');

  readableStream.on('readable', () => {
    const data = readableStream.read();
    if (data) hash.update(data);
    else {
      console.log(hash.digest('hex'));
    }
  });
};

calculateHash();
