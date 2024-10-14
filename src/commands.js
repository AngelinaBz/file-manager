import { list } from "./fs/list.js";
import { up } from "./navigation/up.js";
import { cd } from "./navigation/cd.js";
import { create } from "./fs/create.js";
import { read } from "./fs/read.js";
import { remove } from "./fs/delete.js";
import { rename } from "./fs/rename.js";
import { copy } from "./fs/copy.js";
import { move } from "./fs/move.js";
import { compress } from "./zip/compress.js";
import { decompress } from "./zip/decompress.js";
import { calculateHash } from "./hash/calcHash.js";
import { os } from "./os/os.js";

export const parseArgs = async (input) => {
    const command = input.toString().trim().match(/(?:[^\s"]+|"[^"]+")/g);
    const args = command.slice(1).map(arg => arg.replace(/(^"|"$)/g, ''));
    switch (command[0]) {
        case '.exit':
            process.exit();
            break;
        case 'ls': 
            await list();
            break;
        case 'up': 
            await up();
            break;
        case 'cd': 
            await cd(args[0]);
            break;
        case 'cat': 
            await read(args[0]);
            break;
        case 'add': 
            await create(args[0]);
            break;
        case 'rn': 
            await rename(args[0], args[1]);
            break;
        case 'cp': 
            await copy(args[0], args[1]);
            console.log(`You are currently in ${process.cwd()}`);
            break;
        case 'mv': 
            await move(args[0], args[1]);
            break;
        case 'rm': 
            await remove(args[0]);
            break;
        case 'hash': 
            await calculateHash(args[0]);
            break;
        case 'compress': 
            await compress(args[0], args[1]);
            break;
        case 'decompress': 
            await decompress(args[0], args[1]);
            break;
        case 'os': 
            await os(args[0]);
            break;
        default:
            console.error('Invalid input');
            console.log(`You are currently in ${process.cwd()}`);
        }
};