import { Specification } from '../entities/Specification';

interface ICreateSpecificationsDTO {
	name: string;
	description: string;
}

interface ISpecificationsRepository {
	crete({ name, description }: ICreateSpecificationsDTO): void;
	findByName(name: string): Specification;
	list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
