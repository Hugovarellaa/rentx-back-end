import { ICreateCategoryDTO } from '../dtos/ICreateCategory';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
	create({ name, description }: ICreateCategoryDTO): void;
	findByName(name: string): Category;
	findAll(): Category[];
}

export { ICategoriesRepository };
