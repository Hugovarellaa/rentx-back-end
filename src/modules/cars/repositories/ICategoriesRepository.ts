import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
	create(data: ICreateCategoriesDTO): void;
	getAll(): Category[];
	findByName(name: string): Category;
}

export { ICategoriesRepository };
