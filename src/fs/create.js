import fs from 'fs';
import { resolve } from 'path';

export const create = async (fileName) => {
    if (!fileName) {
        console.error('Invalid input');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }

    const currentDir = process.cwd();
    const filePath = resolve(currentDir, fileName);

    try {
        await fs.promises.access(filePath);
        console.error('Operation failed');
        console.log(`You are currently in ${process.cwd()}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.promises.writeFile(filePath, "");
            console.log(`You are currently in ${process.cwd()}`);
        } else {
            throw error;
        }
    }
};