import { copy } from './copy.js';
import { remove } from './delete.js';

export const move = async (path, newPath) => {
    try {
        await copy(path, newPath);
        await remove(path);
    } catch (error) {
        console.error('Operation failed');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
};