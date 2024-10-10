import fs from 'fs';
import { resolve, join, basename } from 'path';

export const copy = async (path, newPath) => {
    if (!path || !newPath) {
        console.error('Error');
        return;
    }
    const newFilePath = resolve(newPath, basename(path));
    try {
        await fs.promises.stat(path);
    } catch (error) {
        console.error('Error');
        return;
    }
    try {
        const stats = await fs.promises.stat(newPath);
        if (!stats.isDirectory()) {
            console.error('Error');
            return;
        }
    } catch (error) {
        console.error('Error');
        return;
    }
    const readStream = fs.createReadStream(path);
    const writeStream = fs.createWriteStream(newFilePath);
    readStream.pipe(writeStream);
};