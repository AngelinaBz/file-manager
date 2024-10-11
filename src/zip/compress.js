import fs from 'fs';
import { createBrotliCompress } from 'zlib';

export const compress = async (filePath, compressedFile) => {
    if (!filePath || !compressedFile) {
        console.error('Invalid input');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
    try {
        const stats = await fs.promises.stat(filePath);
        if (!stats.isFile()) {
            console.error('Operation failed');
            console.log(`You are currently in ${process.cwd()}`);
            return;
        }
        const brotli = createBrotliCompress();
        const readStream = fs.createReadStream(filePath);
		const writeStream = fs.createWriteStream(compressedFile);

        readStream.pipe(brotli).pipe(writeStream);
        
        return new Promise((resolve) => {
            writeStream.on('finish', async () => {
                try {
                    console.log(`You are currently in ${process.cwd()}`);
                    await fs.promises.unlink(filePath);
                    resolve();
                } catch (error) {
                    console.error('Operation failed');
                    console.log(`You are currently in ${process.cwd()}`);
                }
            });

            writeStream.on('error', () => {
                console.error('Operation failed');
                console.log(`You are currently in ${process.cwd()}`);
            });
        });
        
    } catch (error) {
        console.error('Operation failed');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
};