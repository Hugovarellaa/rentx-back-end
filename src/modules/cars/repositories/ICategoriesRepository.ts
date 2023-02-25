import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
	create({ name, description }: ICreateCategoryDTO): Promise<void>;
	findByName(name: string): Promise<Category>;
	findAll(): Promise<Category[]>;
}

export { ICategoriesRepository };
