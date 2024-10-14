import readline from 'readline';
import { homedir } from 'node:os';
import { parseArgs } from './commands.js';

const startProgram = () => {
  const args = process.argv.slice(2);

  const usernameArg = args.find((arg) => arg.startsWith('--username='));

  if (!usernameArg) {
    console.error('Username is required. Please provide it using --username argument.');
    process.exit(1);
  }

  const username = usernameArg.split('=')[1];

  if (!username || username.trim() === '') {
    console.error('Username is required. Please provide it using --username argument.');
    process.exit(1);
  }

  console.log(`Welcome to the File Manager, ${username}!`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  process.on('SIGINT', () => {
    process.exit();
  });

  process.on('exit', () => console.log(`Thank you for using File Manager, ${username}, goodbye!`));

  rl.on('line', (input) => {
    parseArgs(input);
  });

  process.chdir(homedir());
  console.log(`You are currently in ${process.cwd()}`);
};

startProgram();
