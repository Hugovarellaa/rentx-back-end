import { inject, injectable } from 'tsyringe';

import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateCategoriesUseCase {
	constructor(
		@inject('CategoriesRepository')
		private categoriesRepositories: CategoriesRepository,
	) {}

	async execute({ name, description }: IRequest): Promise<void> {
		const categoryAlreadyExists = await this.categoriesRepositories.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error('Categories already exists');
		}

		await this.categoriesRepositories.create({ name, description });
	}
}

export { CreateCategoriesUseCase };
