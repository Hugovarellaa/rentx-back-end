import { inject, injectable } from 'tsyringe';

import { AppError } from '@errors/AppError';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateCategoriesUseCase {
	constructor(
		@inject('CategoriesRepository')
		private categoriesRepositories: ICategoriesRepository,
	) {}

	async execute({ name, description }: IRequest): Promise<void> {
		const categoryAlreadyExists = await this.categoriesRepositories.findByName(name);

		if (categoryAlreadyExists) {
			throw new AppError('Categories already exists');
		}

		await this.categoriesRepositories.create({ name, description });
	}
}

export { CreateCategoriesUseCase };
