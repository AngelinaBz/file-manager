import fs from 'fs';
import { stdout } from 'process';

export const read = async (path) => {
    if (!path) {
        console.error('Invalid input');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }

    try {
        const stats = await fs.promises.stat(path);
        if (!stats.isFile()) {
            console.error('Operation failed');
            console.log(`You are currently in ${process.cwd()}`);
            return;
        }
        const readStream = fs.createReadStream(path, 'utf-8');
        readStream.on('data', (chunck) => {
            stdout.write(chunck + "\n");
            console.log(`You are currently in ${process.cwd()}`);
        })
    } catch (error) {
        console.error('Operation failed');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
};