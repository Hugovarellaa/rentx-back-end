import { Category } from '../../../entities/Category';
import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

class ListCategoriesUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute(): Category[] {
		const categories = this.categoriesRepository.getAll();
		return categories;
	}
}

export { ListCategoriesUseCase };