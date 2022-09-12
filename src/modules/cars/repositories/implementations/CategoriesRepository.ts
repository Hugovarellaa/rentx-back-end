import { getRepository, Repository } from 'typeorm';

import { ICreateCategoriesDTO } from '../../dtos/ICreateCategoriesDTO';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
	repository: Repository<Category>;

	constructor() {
		this.repository = getRepository(Category);
	}

	async create(data: ICreateCategoriesDTO): Promise<void> {
		const { name, description } = data;
		const category = this.repository.create({ name, description });

		await this.repository.save(category);
	}

	getAll(): Category[] {
		return this.categories;
	}
	findByName(name: string): Category {
		return this.categories.find((c) => c.name === name);
	}
}

export { CategoriesRepository };
