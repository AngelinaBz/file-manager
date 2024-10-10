import fs from 'fs';

export const remove = async (path) => {
    try {
        await fs.promises.access(path);
        await fs.promises.rm(path);
        console.log(`You are currently in ${process.cwd()}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('error');
        } else {
            throw error; 
        }
    }
};