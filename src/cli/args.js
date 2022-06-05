export const parseArgs = () => {
  const keyIndexes = process.argv.reduce((acc, curr, index) => {
    if (curr.slice(0, 2) === '--') {
      return [...acc, index];
    }
    return acc;
  }, []);

  console.log(
    keyIndexes
      .map(keyIndex => {
        return `${process.argv[keyIndex].slice(2)} is ${process.argv[keyIndex + 1]}`;
      })
      .join(', '),
  );
};

parseArgs();
