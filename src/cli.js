export const parseArgs = (input) => {
  const command = input.toString().trim();

  switch (command) {
    case '.exit':
      process.exit();
      break;
  }
};
