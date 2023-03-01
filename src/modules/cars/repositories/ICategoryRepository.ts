import { ICreateCategoriesDTO } from '../dtos/CreateCategoriesDTO';
import { Category } from '../entities/Category';

interface ICategoryRepository {
	create({ name, description }: ICreateCategoriesDTO): Promise<void>;
	findAll(): Promise<Category[]>;
	findByName(name: string): Promise<Category>;
}

export { ICategoryRepository };
