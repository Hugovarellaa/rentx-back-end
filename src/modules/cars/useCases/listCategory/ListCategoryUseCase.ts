import { inject, injectable } from 'tsyringe';

import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';

@injectable()
class ListCategoryUseCase {
	constructor(
		@inject('CategoriesRepository')
		private categoriesRepository: CategoriesRepository,
	) {}

	async execute() {
		const categories = await this.categoriesRepository.list();
		return categories;
	}
}

export { ListCategoryUseCase };
