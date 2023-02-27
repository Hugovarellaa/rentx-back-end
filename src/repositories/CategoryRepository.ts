import { ICreateCategoriesDTO } from '../dtos/CreateCategoriesDTO';
import { Category } from '../entities/Category';

class CategoryRepository {
	categories: Category[];

	constructor() {
		this.categories = [];
	}

	create({ name, description }: ICreateCategoriesDTO): void {
		const category = new Category();

		Object.assign(category, { name, description });

		this.categories.push(category);
	}

	list(): Category[] {
		return this.categories;
	}

	findByName(name: string): Category {
		const categoriesAlreadyExists = this.categories.find((c) => c.name === name);
		return categoriesAlreadyExists;
	}
}

export { CategoryRepository };
