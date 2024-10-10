import { list } from "./fs/list.js";
import { up } from "./fs/up.js";
import { cd } from "./fs/cd.js";
import { create } from "./fs/create.js";
import { read } from "./fs/read.js";

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
        }
};