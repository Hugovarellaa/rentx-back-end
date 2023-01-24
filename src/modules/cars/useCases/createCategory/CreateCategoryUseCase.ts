import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}
	async execute({ name, description }: IRequest): Promise<void> {
		const categoriesAlreadyExists = await this.categoriesRepository.findByName(name);

		if (categoriesAlreadyExists) {
			throw new Error(`Categories ${name} already exists`);
		}

		await this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryUseCase };
