import fs from 'fs';

export const remove = async (path) => {
    if (!path) {
        console.error('Invalid input');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
    try {
        await fs.promises.access(path);
        await fs.promises.rm(path);
        console.log(`You are currently in ${process.cwd()}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('Operation failed');
            console.log(`You are currently in ${process.cwd()}`);
            return;
        } else {
            throw error; 
        }
    }
};