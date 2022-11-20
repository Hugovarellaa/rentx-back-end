import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoriesUseCase {
	constructor(private categoriesRepositories: CategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		const categoryAlreadyExists = this.categoriesRepositories.findByName(name);
		if (categoryAlreadyExists) {
			throw new Error('Categories already exists');
		}

		return this.categoriesRepositories.create({ name, description });
	}
}

export { CreateCategoriesUseCase };
