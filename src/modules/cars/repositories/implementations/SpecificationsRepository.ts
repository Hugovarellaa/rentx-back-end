import { Specification } from '../../entities/Specification';
import { ICreateSpecificationsDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}
	crete({ name, description }: ICreateSpecificationsDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });
		this.specifications.push(specification);
	}
	findByName(name: string): Specification {
		const specificationAlreadyExists = this.specifications.find((spec) => spec.name === name);
		return specificationAlreadyExists;
	}
	list(): Specification[] {
		const allSpecifications = this.specifications;
		return allSpecifications;
	}
}

export { SpecificationsRepository };
