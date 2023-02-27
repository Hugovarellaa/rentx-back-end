import { ICreateCategoriesDTO } from '../dtos/CreateCategoriesDTO';
import { Category } from '../entities/Category';

interface ICategoryRepository {
	create({ name, description }: ICreateCategoriesDTO): void;
	findAll(): Category[];
	findByName(name: string): Category;
}

export { ICategoryRepository };
