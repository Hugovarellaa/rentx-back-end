import { Specification } from '../../entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private specifications: Specification[];
	constructor() {
		this.specifications = [];
	}

	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });
		this.specifications.push(specification);
	}
	findByName(name: string): Specification {
		const specification = this.specifications.find((spec) => spec.name === name);
		return specification;
	}
	list(): Specification[] {
		throw new Error('Method not implemented.');
	}
}

export { SpecificationsRepository };
