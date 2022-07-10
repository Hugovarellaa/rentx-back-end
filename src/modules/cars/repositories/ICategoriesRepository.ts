import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO';
import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepository {
	create(data: ICreateCategoriesDTO): Promise<void>;
	getAll(): Promise<Category[]>;
	findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository };
