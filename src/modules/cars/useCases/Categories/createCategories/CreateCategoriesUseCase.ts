import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../../errors/AppError';
import { CategoryRepository } from '../../../repositories/implementations/CategoryRepository';

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateCategoriesUseCase {
	constructor(
		@inject('CategoryRepository')
		private categoryRepository: CategoryRepository,
	) {}
	async execute({ name, description }: IRequest): Promise<void> {
		const categoriesAlreadyExists = await this.categoryRepository.findByName(name);

		if (categoriesAlreadyExists) {
			throw new AppError(`Category ${name} already exists`);
		}

		await this.categoryRepository.create({ name, description });
	}
}

export { CreateCategoriesUseCase };
