import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
	private categories: Category[];
	constructor() {
		this.categories = [];
	}

	create({ name, description }: ICreateCategoryDTO): void {
		const category = new Category();
		Object.assign(category, { name, description });

		const verifyCategoryAlreadyExists = this.findByName(name);
		if (verifyCategoryAlreadyExists) {
			throw new Error(`Category ${name} already exists`);
		}

		this.categories.push(category);
	}
	findByName(name: string): Category {
		const categoryAlreadyExists = this.categories.find((c) => c.name === name);
		return categoryAlreadyExists;
	}
	list(): Category[] {
		const allCategories = this.categories;
		return allCategories;
	}
}

export { CategoriesRepository };
