import { CategoryRepository } from '../../../repositories/implementations/CategoryRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoriesUseCase {
	constructor(private categoryRepository: CategoryRepository) {}
	execute({ name, description }: IRequest) {
		const categoriesAlreadyExists = this.categoryRepository.findByName(name);

		if (categoriesAlreadyExists) {
			throw new Error(`Category ${name} already exists`);
		}

		this.categoryRepository.create({ name, description });
	}
}

export { CreateCategoriesUseCase };
