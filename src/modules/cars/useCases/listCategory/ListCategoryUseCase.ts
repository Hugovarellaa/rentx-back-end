import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

@injectable()
class ListCategoryUseCase {
	constructor(
		@inject('CategoriesRepository')
		private categoriesRepository: ICategoriesRepository,
	) {}

	async execute() {
		const categories = await this.categoriesRepository.list();
		return categories;
	}
}

export { ListCategoryUseCase };
