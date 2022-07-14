import { inject, injectable } from 'tsyringe';

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
