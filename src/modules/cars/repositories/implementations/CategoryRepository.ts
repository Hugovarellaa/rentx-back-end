import { getRepository, Repository } from 'typeorm';

import { ICreateCategoriesDTO } from '../../dtos/CreateCategoriesDTO';
import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
	private repository: Repository<Category>;

	private constructor() {
		this.repository = getRepository(Category);
	}

	async create({ name, description }: ICreateCategoriesDTO): Promise<void> {
		const category = this.repository.create({ name, description });

		await this.repository.save(category);
	}

	async findAll(): Promise<Category[]> {
		return this.repository.find();
	}

	async findByName(name: string): Promise<Category> {
		return this.repository.findOne({ name });
	}
}

export { CategoryRepository };
