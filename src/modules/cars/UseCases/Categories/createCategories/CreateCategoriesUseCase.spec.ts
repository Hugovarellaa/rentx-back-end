import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/implementations/in-memory/CategoriesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

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

	it('should not be able to create a new Category with same name', async () => {
		expect(async () => {
			const category = {
				name: 'Category',
				description: 'Description',
			};

			await createCategoriesUseCase.execute({
				name: category.name,
				description: category.description,
			});

			await createCategoriesUseCase.execute({
				name: category.name,
				description: category.description,
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
