import { Category } from '../../entities/Category';
import {
	ICategoryRepository,
	ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepository implements ICategoryRepository {
	private categories: Category[];
	private static instance: CategoriesRepository;

	private constructor() {
		this.categories = [];
	}

	public static getInstance(): CategoriesRepository {
		if (!CategoriesRepository.instance) {
			CategoriesRepository.instance = new CategoriesRepository();
		}
		return CategoriesRepository.instance;
	}

	create({ name, description }: ICreateCategoryDTO): void {
		const category = new Category();
		Object.assign(category, { name, description });

		this.categories.push(category);
	}
	list(): Category[] {
		return this.categories;
	}
	findByName(name: string): Category {
		const categories = this.categories.find(
			(category) => category.name === name,
		);
		return categories;
	}
}

export { CategoriesRepository };
