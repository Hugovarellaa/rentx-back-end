import { ICreateSpecificationsDTO } from '@modules/cars/dtos/ICreateSpecificationsDTO';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsInMemory implements ISpecificationsRepository {
	create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
		throw new Error('Method not implemented.');
	}
	getAll(): Promise<Specification[]> {
		throw new Error('Method not implemented.');
	}
	findByName(name: string): Promise<Specification> {
		throw new Error('Method not implemented.');
	}
	findByIds(ids: string[]): Promise<Specification[]> {
		throw new Error('Method not implemented.');
	}
}

export { SpecificationsInMemory };
