import { ICreateSpecificationsDTO } from '../dtos/ICreateSpecificationsDTO';
import { Specification } from '../infra/typeorm/entities/Specification';

interface ISpecificationsRepository {
	create({ name, description }: ICreateSpecificationsDTO): Promise<Specification>;
	getAll(): Promise<Specification[]>;
	findByName(name: string): Promise<Specification>;
	findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationsRepository };
