import { Category } from '../../entities/Categories';
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
	create({ name, description }: ICreateCategoryDTO): void {
		throw new Error('Method not implemented.');
	}
	findByName(name: string): Category {
		throw new Error('Method not implemented.');
	}
	list(): Category[] {
		throw new Error('Method not implemented.');
	}
}

export { CategoryRepository };
