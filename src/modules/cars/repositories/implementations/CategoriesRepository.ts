import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
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
	findByName(name: string): Category {
		const category = this.categories.find((c) => c.name === name);
		return category;
	}
	list(): Category[] {
		const { categories } = this;
		return categories;
	}
}

export { CategoriesRepository };
