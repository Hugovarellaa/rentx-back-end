import { Specification } from '../../entities/Specification';
import {
	ICreateSpecificationDTO,
	ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}
	list(): Specification[] {
		return this.specifications;
	}
	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });

		this.specifications.push(specification);
	}

	findByName(name: string): Specification {
		const specifications = this.specifications.find(
			(specification) => specification.name === name,
		);
		return specifications;
	}
}

export { SpecificationsRepository };
