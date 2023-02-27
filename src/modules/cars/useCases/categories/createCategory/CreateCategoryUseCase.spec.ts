import { CategoriesRepositoryInMemory } from '../../../repositories/implementations/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe('Create Category', () => {
	beforeEach(() => {
		categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
		createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
	});

	it('should be able to create a category', async () => {
		const category = {
			name: 'Category name Test',
			description: 'Category description Test',
		};

		await createCategoryUseCase.execute(category);

		const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

		expect(categoryCreated).toHaveProperty('id');
	});
});
