import { getRepository, Repository } from 'typeorm';

import { ICreateSpecificationsDTO } from '@modules/cars/dtos/ICreateSpecificationsDTO';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private repository: Repository<Specification>;

	constructor() {
		this.repository = getRepository(Specification);
	}

	async create({ name, description }: ICreateSpecificationsDTO): Promise<Specification> {
		const specifications = this.repository.create({ name, description });

		await this.repository.save(specifications);

		return specifications;
	}

	async getAll(): Promise<Specification[]> {
		return this.repository.find();
	}

	async findByName(name: string): Promise<Specification> {
		return this.repository.findOne({ name });
	}

	async findByIds(ids: string[]): Promise<Specification[]> {
		return this.repository.findByIds(ids);
	}
}

export { SpecificationsRepository };
