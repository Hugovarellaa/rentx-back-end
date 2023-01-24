import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute({ name, description }: IRequest): void {
		const categoriesAlreadyExists = this.categoriesRepository.findByName(name);

		if (categoriesAlreadyExists) {
			throw new Error(`Categories ${name} already exists`);
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryUseCase };
