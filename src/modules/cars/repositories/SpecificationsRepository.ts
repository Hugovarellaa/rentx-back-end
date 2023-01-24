import { Specification } from '../entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from './implementations/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private specification: Specification[];
	constructor() {
		this.specification = [];
	}
	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification();
		Object.assign(specification, {
			name,
			description,
			created_at: new Date(),
		});
		this.specification.push(specification);
	}
}

export { SpecificationsRepository };
