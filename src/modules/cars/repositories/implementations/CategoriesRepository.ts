import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
	ICategoryRepository,
	ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepository implements ICategoryRepository {
	private static instance: CategoriesRepository;
	private repository: Repository<Category>;

	private constructor() {
		this.repository = getRepository(Category);
	}

	public static getInstance(): CategoriesRepository {
		if (!CategoriesRepository.instance) {
			CategoriesRepository.instance = new CategoriesRepository();
		}
		return CategoriesRepository.instance;
	}

	async create({ name, description }: ICreateCategoryDTO): Promise<void> {
		const category = this.repository.create({
			name,
			description,
		});

		await this.repository.save(category);
	}
	async list(): Promise<Category[]> {
		const categories = await this.repository.find();
		return categories;
	}
	async findByName(name: string): Promise<Category> {
		const categories = await this.repository.findOne({ name });
		return categories;
	}
}

export { CategoriesRepository };
