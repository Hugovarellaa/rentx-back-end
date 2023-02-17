import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

class ListCategoryUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute() {
		const categories = this.categoriesRepository.list();
		return categories;
	}
}

export { ListCategoryUseCase };
