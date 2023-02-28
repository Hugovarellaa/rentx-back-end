import { Category } from '../../../entities/Category';
import { CategoryRepository } from '../../../repositories/implementations/CategoryRepository';

class ListCategoriesUseCase {
	constructor(private categoryRepository: CategoryRepository) {}
	execute(): Category[] {
		return this.categoryRepository.findAll();
	}
}

export { ListCategoriesUseCase };
