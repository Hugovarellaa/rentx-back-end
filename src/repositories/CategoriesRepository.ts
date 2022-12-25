import { Category } from '../entities/Category';

// DTO => Data Transfer Object
interface ICreateCategoryDTO {
	name: string;
	description: string;
}

class CategoriesRepository {
	private categories: Category[];
	constructor() {
		this.categories = [];
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