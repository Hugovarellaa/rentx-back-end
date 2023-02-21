import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
	specifications: Specification[] = [];

	async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
		const specifications = new Specification();
		Object.assign(specifications, { name, description });
		this.specifications.push(specifications);

		return specifications;
	}
	async findByName(name: string): Promise<Specification> {
		return this.specifications.find((spec) => spec.name === name);
	}
	async list(): Promise<Specification[]> {
		return this.specifications;
	}
	async findByIds(ids: string[]): Promise<Specification[]> {
		const allSpecifications = this.specifications.filter((spec) => ids.includes(spec.id));
		return allSpecifications;
	}
}

export { SpecificationsRepositoryInMemory };
