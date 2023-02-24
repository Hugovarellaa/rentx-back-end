import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategories {
	name: string;
	description: string;
}

class ImportCategoriesUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
		return new Promise((resolve, reject) => {
			const categories: IImportCategories[] = [];

			const stream = fs.createReadStream(file.path);
			const parseFile = csvParse();

			stream.pipe(parseFile);

			parseFile
				.on('data', (line) => {
					const [name, description] = line;
					categories.push({
						name,
						description,
					});
				})
				.on('end', () => {
					fs.promises.unlink(file.path);
					resolve(categories);
				})
				.on('error', (err) => {
					reject(err);
				});
		});
	}

	async execute(file: Express.Multer.File) {
		const categories = await this.loadCategories(file);

		categories.map(async (category) => {
			const { name, description } = category;
			const categoryAlreadyExists = this.categoriesRepository.findByName(name);

			if (!categoryAlreadyExists) {
				this.categoriesRepository.create({ name, description });
			}
		});
	}
}

export { ImportCategoriesUseCase };
