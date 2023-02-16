import { Category } from '../entities/Category';

interface ICreateCategoriesDTO {
	name: string;
	description: string;
}

class CategoriesRepository {
	private categories: Category[];

	constructor() {
		this.categories = [];
	}

	create({ name, description }: ICreateCategoriesDTO) {
		const category = new Category();
		Object.assign(category, { name, description });

		this.categories.push(category);
	}

	list(): Category[] {
		const categoriesAll = this.categories;
		return categoriesAll;
	}

	findByName(name: string): Category {
		const categoriesAlreadyExists = this.categories.find((c) => c.name === name);
		return categoriesAlreadyExists;
	}
}

export { CategoriesRepository };
