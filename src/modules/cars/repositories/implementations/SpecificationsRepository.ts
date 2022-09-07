import { getRepository, Repository } from 'typeorm';

import { ICreateSpecificationsDTO } from '../../dtos/ICreateSpecificationsDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private repository: Repository<Specification>;

	private constructor() {
		this.repository = getRepository(Specification);
	}

	async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
		const specifications = this.repository.create({ name, description });

		await this.repository.save(specifications);
	}

	async getAll(): Promise<Specification[]> {
		return this.repository.find();
	}

	async findByName(name: string): Promise<Specification> {
		return this.repository.findOne({ name });
	}
}

export { SpecificationsRepository };
