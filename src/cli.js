import { list } from "./fs/list.js";

export const parseArgs = async (input) => {
  const command = input.toString().trim();

  switch (command) {
    case '.exit':
        process.exit();
        break;
    case 'ls': 
        await list();
        break;
  }
};
