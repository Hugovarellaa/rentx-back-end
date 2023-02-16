import { Category } from '../entities/Category';

interface ICreateCategoriesDTO {
	name: string;
	description: string;
}

interface ICategoriesRepository {
	create({ name, description }: ICreateCategoriesDTO): void;
	findByName(name: string): Category;
	list(): Category[];
}

export { ICategoriesRepository, ICreateCategoriesDTO };
