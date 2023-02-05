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
		throw new Error('Method not implemented.');
	}
	findByName(name: string): Category {
		throw new Error('Method not implemented.');
	}
}

export { CategoriesRepository };
