import fs from 'fs';
import { resolve, basename } from 'path';

export const copy = async (path, newPath) => {
    if (!path || !newPath) {
        console.error('Invalid input');
        return;
    }
    const newFilePath = resolve(newPath, basename(path));
    try {
        await fs.promises.stat(path);
    } catch (error) {
        console.error('Operation failed');
        return;
    }
    try {
        const stats = await fs.promises.stat(newPath);
        if (!stats.isDirectory()) {
            console.error('Operation failed');
            return;
        }
    } catch (error) {
        console.error('Operation failed');
        return;
    }
    const readStream = fs.createReadStream(path);
    const writeStream = fs.createWriteStream(newFilePath);
    readStream.pipe(writeStream);
};