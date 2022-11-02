import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

class ImportCategoriesUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}

	loadCategories(file: Express.Multer.File) {
		console.log(file);
	}

	async execute(file: Express.Multer.File) {
		const categories = await this.loadCategories(file);
	}
}

export { ImportCategoriesUseCase };
