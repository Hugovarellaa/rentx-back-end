import { ICreateSpecificationsDTO } from '../dtos/CreateSpecificationsDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationRepository {
	create({ name, description }: ICreateSpecificationsDTO): Promise<void>;
	findAll(): Promise<Specification[]>;
	findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository };
