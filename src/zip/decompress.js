import fs from 'fs';
import { createBrotliDecompress } from 'zlib';

export const decompress = async (compressedFile, filePath) => {
    try {
        await fs.promises.access(compressedFile);
        const brotli = createBrotliDecompress();
        const readStream = fs.createReadStream(compressedFile);
		const writeStream = fs.createWriteStream(filePath);

        readStream.pipe(brotli).pipe(writeStream);
        
        return new Promise((resolve, reject) => {
            writeStream.on('finish', async () => {
                try {
                    console.log(`You are currently in ${process.cwd()}`);
                    await fs.promises.unlink(compressedFile);
                    resolve();
                } catch (error) {
                    reject(new Error('Failed'));
                }
            });

            writeStream.on('error', reject);
        });
        
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('File not found');
        } else {
            throw error;
        }
    }
};