import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async args => {
  const sp = spawn('node', [__dirname + '/files/script.js', ...args]);

  process.stdin.pipe(sp.stdin);
  sp.stdout.pipe(process.stdout);
};

spawnChildProcess(['a', 2]);
