import { ICreateCategoryDTO } from '../../dtos/ICreateCategory';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
	categories: Category[];

	constructor() {
		this.categories = [];
	}

	create({ name, description }: ICreateCategoryDTO): void {
		const category = new Category();
		Object.assign(category, { name, description });

		this.categories.push(category);
	}

	findByName(name: string): Category {
		return this.categories.find((c) => c.name === name);
	}

	findAll(): Category[] {
		return this.categories;
	}
}

export { CategoriesRepository };
