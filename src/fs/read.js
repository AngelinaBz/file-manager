import fs from 'fs';
import { stdout } from 'process';

export const read = async (path) => {
    const readStream = fs.createReadStream(path, 'utf-8');
    readStream.on('data', (chunck) => {
        stdout.write(chunck + "\n");
        console.log(`You are currently in ${process.cwd()}`);
    })
};