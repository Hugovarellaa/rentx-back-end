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

		this.categories.push(category);
	}
	findByName(name: string): Category {
		const category = this.categories.find((c) => c.name === name);
		return category;
	}
	list(): Category[] {
		throw new Error('Method not implemented.');
	}
}

export { CategoriesRepository };
