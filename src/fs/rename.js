import fs from 'fs';
import { join, dirname } from 'path';

export const rename = async (path, newFileName) => {
    const filePath = dirname(path);
    const newFilePath = join(filePath, newFileName);
    try {
        await fs.promises.access(path);
    } catch (error) {
        console.error('error');
    }

    try {
        await fs.promises.access(newFilePath );
        console.error('error');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    await fs.promises.rename(path, newFilePath);
    console.log(`You are currently in ${process.cwd()}`);
};