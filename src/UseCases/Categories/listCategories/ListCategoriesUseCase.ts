import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

class ListCategoriesUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute(): void {
		this.categoriesRepository.getAll();
	}
}

export { ListCategoriesUseCase };
