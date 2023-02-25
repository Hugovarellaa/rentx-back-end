import fs from 'fs';

export const deleteFile = async (filename: string) => {
	try {
		// verificar se o arquivo existir
		await fs.promises.stat(filename);
	} catch (err) {
		console.log(err);
		return;
	}

	// remove o arquivo
	await fs.promises.unlink(filename);
};
