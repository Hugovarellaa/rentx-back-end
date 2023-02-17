import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoriesUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute({ name, description }: IRequest) {
		const categoriesAlreadyExist = this.categoriesRepository.findByName(name);

		if (categoriesAlreadyExist) {
			throw new Error(`Category ${name} already exists`);
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoriesUseCase };
