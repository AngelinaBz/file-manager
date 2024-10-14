import fs from 'fs';
import { createBrotliDecompress } from 'zlib';

export const decompress = async (compressedFile, filePath) => {
    if (!filePath || !compressedFile) {
        console.error('Invalid input');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }
    try {
        const stats = await fs.promises.stat(compressedFile);
        if (!stats.isFile()) {
            console.error('Operation failed');
            console.log(`You are currently in ${process.cwd()}`);
            return;
        }
        const brotli = createBrotliDecompress();
        const readStream = fs.createReadStream(compressedFile);
		const writeStream = fs.createWriteStream(filePath);

        readStream.pipe(brotli).pipe(writeStream);
        
        readStream.on('error', () => {
            console.error('Operation failed');
            console.log(`You are currently in ${process.cwd()}`);
            return;
        });

        return new Promise((resolve) => {
            writeStream.on('finish', async () => {
                try {
                    console.log(`You are currently in ${process.cwd()}`);
                    await fs.promises.unlink(compressedFile);
                    resolve();
                } catch (error) {
                    console.error('Operation failed');
                    console.log(`You are currently in ${process.cwd()}`);
                }
            });

            writeStream.on('error', (error) => {
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