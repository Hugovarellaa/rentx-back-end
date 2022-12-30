import { ICreateSpecificationsDTO } from '../../dtos/ICreateSpecificationsDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	specifications: Specification[];

	constructor() {
		this.specifications = [];
	}

	create({ name, description }: ICreateSpecificationsDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });

		this.specifications.push(specification);
	}

	getAll(): Specification[] {
		throw new Error('Method not implemented.');
	}
	findByName(name: string): Specification {
		throw new Error('Method not implemented.');
	}
}

export { SpecificationsRepository };
