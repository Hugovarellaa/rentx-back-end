import { getRepository, Repository } from 'typeorm';

import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private repository: Repository<Specification>;

	constructor() {
		this.repository = getRepository(Specification);
	}

	async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
		const specifications = this.repository.create({ name, description });

		await this.repository.save(specifications);
	}
	async findByName(name: string): Promise<Specification> {
		const specificationAlreadyExists = await this.repository.findOne({ name });
		return specificationAlreadyExists;
	}
	async findAll(): Promise<Specification[]> {
		const specifications = this.repository.find();
		return specifications;
	}
}

export { SpecificationsRepository };
