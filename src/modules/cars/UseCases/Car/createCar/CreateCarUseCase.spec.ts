import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
	});

	it('should be able to create a new car', async () => {
		await createCarUseCase.execute({
			name: 'Name Car',
			description: 'Description Car',
			daily_rato: 100,
			license_plate: 'ABC-123',
			fine_amount: 22,
			brand: 'Brand',
			category_id: 'category',
		});
	});

	it('should be able to create a car with exists license plate', async () => {
		expect(async () => {
			await createCarUseCase.execute({
				name: 'Name1',
				description: 'Description Car',
				daily_rato: 100,
				license_plate: 'ABC-123',
				fine_amount: 22,
				brand: 'Brand',
				category_id: 'category',
			});

			await createCarUseCase.execute({
				name: 'Name2',
				description: 'Description Car',
				daily_rato: 100,
				license_plate: 'ABC-123',
				fine_amount: 22,
				brand: 'Brand',
				category_id: 'category',
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
