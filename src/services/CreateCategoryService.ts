import { CategoriesRepository } from '../repositories/implementations/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryService {
	constructor(private categoriesRepository: CategoriesRepository) {}

	execute({ name, description }: IRequest) {
		const categoryAlreadyExists = this.categoriesRepository.findByName(name);
		if (categoryAlreadyExists) {
			throw new Error(`Category ${name} already exists`);
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryService };
