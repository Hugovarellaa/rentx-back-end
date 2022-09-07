import { ICreateSpecificationsDTO } from '../dtos/ICreateSpecificationsDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationsRepository {
	create({ name, description }: ICreateSpecificationsDTO): Promise<void>;
	getAll(): Promise<Specification[]>;
	findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository };
