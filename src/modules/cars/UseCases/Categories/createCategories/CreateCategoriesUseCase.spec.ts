import { CategoriesRepositoryInMemory } from '../../../repositories/implementations/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

let createCategoriesUseCase: CreateCategoriesUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
	beforeEach(() => {
		categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
		createCategoriesUseCase = new CreateCategoriesUseCase(categoriesRepositoryInMemory);
	});

	it('should be able to create a new Category', async () => {
		const category = {
			name: 'Category Test',
			description: 'Test description',
		};

		await createCategoriesUseCase.execute({
			name: category.name,
			description: category.description,
		});

		const createdCategory = await categoriesRepositoryInMemory.findByName(category.name);

		expect(createdCategory).toHaveProperty('id');
	});
});
