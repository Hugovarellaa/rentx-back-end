import { ICreateSpecificationsDTO } from '@modules/cars/dtos/ICreateSpecificationsDTO';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsInMemory implements ISpecificationsRepository {
	specifications: Specification[] = [];

	async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
		const specification = new Specification();

		Object.assign(specification, { name, description });
		this.specifications.push(specification);
	}
	async getAll(): Promise<Specification[]> {
		return this.specifications;
	}
	async findByName(name: string): Promise<Specification> {
		return this.specifications.find((spec) => spec.name === name);
	}
	findByIds(ids: string[]): Promise<Specification[]> {
		throw new Error('Method not implemented.');
	}
}

export { SpecificationsInMemory };
