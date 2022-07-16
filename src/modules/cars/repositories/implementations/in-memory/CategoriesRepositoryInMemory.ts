import { ICreateCategoriesDTO } from '@modules/cars/dtos/ICreateCategoriesDTO';
import { Category } from '@modules/cars/entities/Category';

import { ICategoriesRepository } from '../../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
	categories: Category[] = [];

	async create(data: ICreateCategoriesDTO): Promise<void> {
		const { name, description } = data;
		const category = new Category();
		Object.assign(category, { name, description });

		this.categories.push(category);
	}

	async getAll(): Promise<Category[]> {
		return this.categories;
	}

	async findByName(name: string): Promise<Category> {
		return this.categories.find((c) => c.name === name);
	}
}

export { CategoriesRepositoryInMemory };
