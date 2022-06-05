import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const stream = fs.createReadStream(__dirname + '/files/fileToRead.txt', 'utf-8');

  let data = '';

  stream.on('data', chunk => (data += chunk));
  stream.on('end', () => process.stdout.write(data));
  stream.on('error', error => console.log('Error', error.message));
};

read();
