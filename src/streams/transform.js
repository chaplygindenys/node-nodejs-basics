import { Transform } from 'stream';

export const transform = async () => {
  let stream = process.stdin;
  const reversed = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n');
    },
  });
  stream.pipe(reversed).pipe(process.stdout);
};

transform();
