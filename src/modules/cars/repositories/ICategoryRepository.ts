import { Category } from '../entities/Categories';

interface ICreateCategoryDTO {
	name: string;
	description: string;
}

interface ICategoryRepository {
	create({ name, description }: ICreateCategoryDTO): void;
	findByName(name: string): Category;
	list(): Category[];
}

export { ICategoryRepository, ICreateCategoryDTO };
