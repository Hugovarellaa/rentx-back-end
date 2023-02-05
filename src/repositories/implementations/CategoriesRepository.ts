import { ICreateCategoriesDTO } from '../../dtos/ICreateCategoriesDTO';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
	categories: Category[];

	constructor() {
		this.categories = [];
	}

	create(data: ICreateCategoriesDTO): void {
		const { name, description } = data;
		const category = new Category();
		Object.assign(category, { name, description });
		this.categories.push(category);
	}

	getAll(): Category[] {
		return this.categories;
	}
	findByName(name: string): Category {
		return this.categories.find((c) => c.name === name);
	}
}

export { CategoriesRepository };
