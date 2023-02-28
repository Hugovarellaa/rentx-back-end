import { ICreateSpecificationsDTO } from '../dtos/CreateSpecificationsDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationRepository {
	create({ name, description }: ICreateSpecificationsDTO): void;
	findAll(): Specification[];
	findByName(name: string): Specification;
}

export { ISpecificationRepository };
