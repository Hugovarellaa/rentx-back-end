import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
	constructor(
		@inject('CategoriesRepository')
		private categoriesRepository: ICategoriesRepository,
	) {}

	async execute(): Promise<Category[]> {
		const categories = await this.categoriesRepository.getAll();
		return categories;
	}
}

export { ListCategoriesUseCase };
