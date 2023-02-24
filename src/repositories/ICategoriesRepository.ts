import { ICreateCategoryDTO } from '../dtos/ICreateCategory';

interface ICategoriesRepository {
	create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository };
