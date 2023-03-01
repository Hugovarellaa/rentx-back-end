import { getRepository, Repository } from 'typeorm';

import { ICreateCategoriesDTO } from '../../dtos/CreateCategoriesDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
	private repository: Repository<Specification>;

	constructor() {
		this.repository = getRepository(Specification);
	}

	async create({ name, description }: ICreateCategoriesDTO): Promise<void> {
		const specification = this.repository.create({ name, description });

		await this.repository.save(specification);
	}

	async findAll(): Promise<Specification[]> {
		return this.repository.find();
	}

	async findByName(name: string): Promise<Specification> {
		return this.repository.findOne({ name });
	}
}

export { SpecificationRepository };
