import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

import { ICategoryRepository } from '../../repositories/ICategoryRepository';

class ImportCategoryUseCase {
	constructor(private categoriesRepository: ICategoryRepository) {}
	execute(file: Express.Multer.File) {
		const stream = fs.createReadStream(file.path);
		const parseFile = csvParse();
		stream.pipe(parseFile);

		parseFile.on('data', async (line) => {
			console.log(line);
		});
	}
}

export { ImportCategoryUseCase };
