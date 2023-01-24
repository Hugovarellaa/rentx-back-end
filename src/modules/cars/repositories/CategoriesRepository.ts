import { Category } from '../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './implementations/ICategoriesRepository';

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

		Object.assign(category, {
			name,
			description,
			created_at: new Date(),
		});

		this.categories.push(category);
	}
	list(): Category[] {
		return this.categories;
	}
	findByName(name: string): Category {
		return this.categories.find((category) => category.name === name);
	}
}

export { CategoriesRepository };
