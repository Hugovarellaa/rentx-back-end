import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	specifications: Specification[];
	constructor() {
		this.specifications = [];
	}

	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });
		this.specifications.push(specification);
	}
	findByName(name: string): Specification {
		return this.specifications.find((spec) => spec.name === name);
	}
	findAll(): Specification[] {
		return this.specifications;
	}
}

export { SpecificationsRepository };
