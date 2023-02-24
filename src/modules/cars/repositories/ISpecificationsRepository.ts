import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationsRepository {
	create({ name, description }: ICreateSpecificationDTO): void;
	findByName(name: string): Specification;
	findAll(): Specification[];
}

export { ISpecificationsRepository };
