import { ICreateCategoriesDTO } from '../../dtos/CreateCategoriesDTO';
import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
	private categories: Category[];

	public static instance: CategoryRepository;

	private constructor() {
		this.categories = [];
	}

	public static getInstance(): CategoryRepository {
		if (!CategoryRepository.instance) {
			CategoryRepository.instance = new CategoryRepository();
		}
		return CategoryRepository.instance;
	}

	create({ name, description }: ICreateCategoriesDTO): void {
		const category = new Category();
		Object.assign(category, { name, description });

		this.categories.push(category);
	}

	findAll(): Category[] {
		return this.categories;
	}

	findByName(name: string): Category {
		const categoriesAlreadyExists = this.categories.find((c) => c.name === name);
		return categoriesAlreadyExists;
	}
}

export { CategoryRepository };
