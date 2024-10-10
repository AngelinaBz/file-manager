import fs from 'fs';
import { createBrotliCompress } from 'zlib';

export const compress = async (filePath, compressedFile) => {
    try {
        await fs.promises.access(filePath);
        const brotli = createBrotliCompress();
        const readStream = fs.createReadStream(filePath);
		const writeStream = fs.createWriteStream(compressedFile);

        readStream.pipe(brotli).pipe(writeStream);
        
        return new Promise((resolve, reject) => {
            writeStream.on('finish', async () => {
                try {
                    console.log(`You are currently in ${process.cwd()}`);
                    await fs.promises.unlink(filePath);
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