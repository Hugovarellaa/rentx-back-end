import { ICreateCategoriesDTO } from '../../dtos/CreateCategoriesDTO';
import { Category } from '../../entities/Category';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}

	create({ name, description }: ICreateCategoriesDTO): void {
		const category = new Category();

		Object.assign(category, { name, description });

		this.specifications.push(category);
	}

	findAll(): Category[] {
		return this.specifications;
	}

	findByName(name: string): Category {
		const categoriesAlreadyExists = this.specifications.find((c) => c.name === name);
		return categoriesAlreadyExists;
	}
}

export { SpecificationRepository };
