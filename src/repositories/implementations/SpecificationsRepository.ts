import { ICreateSpecificationsDTO } from '../../dtos/ICreateSpecificationsDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	create({ name, description }: ICreateSpecificationsDTO): void {
		throw new Error('Method not implemented.');
	}
	getAll(): Specification[] {
		throw new Error('Method not implemented.');
	}
	findByName(name: string): Specification {
		throw new Error('Method not implemented.');
	}
}

export { SpecificationsRepository };
