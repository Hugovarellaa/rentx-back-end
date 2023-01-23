import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryService {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute({ name, description }: IRequest): void {
		const categoriesAlreadyExists = this.categoriesRepository.findByName(name);

		if (categoriesAlreadyExists) {
			throw new Error('Categories already exists');
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryService };
