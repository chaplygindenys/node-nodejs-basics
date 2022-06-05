export const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter(([name, value]) => name.slice(0, 4) === 'RSS_')
      .map(([name, value]) => {
        return `${name}=${value}`;
      })
      .join('; '),
  );
};

parseEnv();
