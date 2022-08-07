import { ICreateCategoriesDTO } from '../../../dtos/ICreateCategoriesDTO';
import { Category } from '../../../entities/Category';
import { ICategoriesRepository } from '../../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
	categories: Category[];

	async create(data: ICreateCategoriesDTO): Promise<void> {
		const { name, description } = data;
		const category = new Category();
		Object.assign(category, { name, description });

		this.categories.push(category);
	}
	async getAll(): Promise<Category[]> {
		return this.categories;
	}
	findByName(name: string): Promise<Category> {
		throw new Error('Method not implemented.');
	}
}

export { CategoriesRepositoryInMemory };
