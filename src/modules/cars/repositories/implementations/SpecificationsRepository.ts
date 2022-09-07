import { getRepository, Repository } from 'typeorm';

import { ICreateSpecificationsDTO } from '../../dtos/ICreateSpecificationsDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private repository: Repository<Specification>;

	private constructor() {
		this.repository = getRepository(Specification);
	}

	create({ name, description }: ICreateSpecificationsDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });

		this.specifications.push(specification);
	}

	getAll(): Specification[] {
		return this.specifications;
	}
	findByName(name: string): Specification {
		return this.specifications.find((spec) => spec.name === name);
	}
}

export { SpecificationsRepository };
