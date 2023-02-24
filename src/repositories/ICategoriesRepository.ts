import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
	create({ name, description }: ICreateCategoryDTO): void;
	findByName(name: string): Category;
	findAll(): Category[];
}

export { ICategoriesRepository };
