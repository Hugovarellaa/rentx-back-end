import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryServices {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute({ name, description }: IRequest) {
		const categoryAlreadyExists = this.categoriesRepository.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error(`Category with name ${name} already exists`);
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryServices };
