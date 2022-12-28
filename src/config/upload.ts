import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';

export default {
	upload(folder: string) {
		return {
			storage: multer.diskStorage({
				destination: resolve(__dirname, '..', '..', folder),
				filename: (request, file, cb) => {
					const fileHash = crypto.randomBytes(16).toString('hex');
					const filename = `${file.originalname}-${fileHash}`;

					return cb(null, filename);
				},
			}),
		};
	},
};
