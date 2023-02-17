import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
	name: string;
	description: string;
}

interface ICategoriesRepository {
	create({ name, description }: ICreateCategoryDTO);
	findByName(name: string): Category;
	list(): Category[];
}
