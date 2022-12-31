import { ICreateSpecificationsDTO } from '../dtos/ICreateSpecificationsDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationsRepository {
	create({ name, description }: ICreateSpecificationsDTO): void;
	getAll(): Specification[];
	findByName(name: string): Specification;
}

export { ISpecificationsRepository };
