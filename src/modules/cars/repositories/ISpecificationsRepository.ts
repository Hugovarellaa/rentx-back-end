import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationsRepository {
	create({ name, description }: ICreateSpecificationDTO): Promise<void>;
	findByName(name: string): Promise<Specification>;
	findAll(): Promise<Specification[]>;
}

export { ISpecificationsRepository };
