import { ICreateCategoriesDTO } from '../../dtos/CreateCategoriesDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}

	create({ name, description }: ICreateCategoriesDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });

		this.specifications.push(specification);
	}

	findAll(): Specification[] {
		return this.specifications;
	}

	findByName(name: string): Specification {
		const specificationAlreadyExists = this.specifications.find((c) => c.name === name);
		return specificationAlreadyExists;
	}
}

export { SpecificationRepository };
