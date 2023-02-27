import { ICreateCategoriesDTO } from '../dtos/CreateCategoriesDTO';
import { Category } from '../entities/Category';

interface ISpecificationRepository {
	create({ name, description }: ICreateCategoriesDTO): void;
	findAll(): Category[];
	findByName(name: string): Category;
}

export { ISpecificationRepository };
