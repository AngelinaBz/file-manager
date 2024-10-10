import { createHash } from 'crypto';
import fs from 'fs';

export const calculateHash = async (path) => {
    const hash = createHash('sha256');
    const fileStream = fs.createReadStream(path);

    try {
		await fs.promises.access(path);

		fileStream.on('data', chunk => {
			hash.update(chunk);
		});
		fileStream.on('end', () => {
			console.log(hash.digest('hex'));
			console.log(`You are currently in ${process.cwd()}`);
		});
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(`Failed`);
		}
	}
};