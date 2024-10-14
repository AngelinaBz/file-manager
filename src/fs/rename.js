import fs from 'fs';
import { join, dirname } from 'path';

export const rename = async (path, newFileName) => {
    if (!path || !newFileName) {
        console.error('Invalid input');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
    const filePath = dirname(path);
    const newFilePath = join(filePath, newFileName);
    try {
        await fs.promises.access(path);
    } catch (error) {
        console.error('Operation failed');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }

    try {
        await fs.promises.access(newFilePath );
        console.error('Operation failed');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    try {
        await fs.promises.rename(path, newFilePath);
        console.log(`You are currently in ${process.cwd()}`);
    } catch (error) {
        console.error('Operation failed');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
};