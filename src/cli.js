import { list } from "./fs/list.js";
import { up } from "./fs/up.js";
import { cd } from "./fs/cd.js";
import { create } from "./fs/create.js";
import { read } from "./fs/read.js";
import { remove } from "./fs/delete.js";
import { rename } from "./fs/rename.js";
import { copy } from "./fs/copy.js";
import { move } from "./fs/move.js";
import { compress } from "./zip/compress.js";
import { decompress } from "./zip/decompress.js";
import { calculateHash } from "./hash/calcHash.js";

export const parseArgs = async (input) => {
    const command = input.toString().trim().split(' ');
    const path = command[1];
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
            await cd(path);
            break;
        case 'cat': 
            await read(path);
            break;
        case 'add': 
            await create(path);
            break;
        case 'rn': 
            await rename(path, command[2]);
            break;
        case 'cp': 
            await copy(path, command[2]);
            console.log(`You are currently in ${process.cwd()}`);
            break;
        case 'mv': 
            await move(path, command[2]);
            break;
        case 'rm': 
            await remove(path);
            break;
        case 'hash': 
            await calculateHash(path);
            break;
        case 'compress': 
            await compress(path, command[2]);
            break;
        case 'decompress': 
            await decompress(path, command[2]);
            break;
        }
};