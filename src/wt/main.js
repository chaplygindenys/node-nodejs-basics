import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const CPU = cpus().length;
  let workers = [];
  const runWorker = (workerData = null) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__dirname + '/worker.js', { workerData });
      worker.on('message', number => {
        resolve({ status: 'resolved', data: number });
      });
      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
      worker.on('exit', code => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };

  for (let i = 10; i < 10 + CPU; i++) {
    workers.push(runWorker(i));
  }

  return Promise.all(workers);
};

performCalculations().then(console.log);
