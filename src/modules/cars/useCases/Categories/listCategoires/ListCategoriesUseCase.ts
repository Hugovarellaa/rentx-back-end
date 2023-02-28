import { CategoryRepository } from '../../../repositories/implementations/CategoryRepository';

class ListCategoriesUseCase {
	constructor(private categoryRepository: CategoryRepository) {}
	execute() {
		return this.categoryRepository.findAll();
	}
}

export { ListCategoriesUseCase };
