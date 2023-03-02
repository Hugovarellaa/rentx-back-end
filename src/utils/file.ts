import fs from 'fs';

export async function deleteFile(file: string) {
	try {
		await fs.promises.stat(file);
	} catch {
		return;
	}
	await fs.promises.unlink(file);
}
