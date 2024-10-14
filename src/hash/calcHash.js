import { createHash } from 'crypto';
import fs from 'fs';

export const calculateHash = async (path) => {
	if (!path) {
        console.error('Invalid input');
        console.log(`You are currently in ${process.cwd()}`);
        return;
    }

    try {
		await fs.promises.access(path);

		const hash = createHash('sha256');
		const fileStream = fs.createReadStream(path);
		
		fileStream.on('data', chunk => {
			hash.update(chunk);
		});
		fileStream.on('end', () => {
			console.log(hash.digest('hex'));
			console.log(`You are currently in ${process.cwd()}`);
		});
	} catch (err) {
		console.error('Operation failed');
		console.log(`You are currently in ${process.cwd()}`);
		return;
	}
};