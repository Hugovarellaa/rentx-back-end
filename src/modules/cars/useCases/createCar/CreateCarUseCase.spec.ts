import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarRepositoryInMemory;

describe('Create car', () => {
	beforeEach(() => {
		carsRepository = new CarRepositoryInMemory();
		createCarUseCase = new CreateCarUseCase(carsRepository);
	});

	it('should be able to create a new car', async () => {
		const car = await createCarUseCase.execute({
			name: 'Name Car',
			description: 'Description Car',
			daily_rate: 100,
			license_plate: 'ABC-1234',
			fine_amount: 60,
			brand: 'brand',
			category_id: 'category',
		});
		expect(car).toHaveProperty('id');
	});

	it('should not be able to create a car with exists license plate', async () => {
		expect(async () => {
			await createCarUseCase.execute({
				name: 'Car1',
				description: 'Description Car',
				daily_rate: 100,
				license_plate: 'ABC-1234',
				fine_amount: 60,
				brand: 'brand',
				category_id: 'category',
			});

			await createCarUseCase.execute({
				name: 'Car2',
				description: 'Description Car',
				daily_rate: 100,
				license_plate: 'ABC-1234',
				fine_amount: 60,
				brand: 'brand',
				category_id: 'category',
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should be able to create a car with disponibility by default', async () => {
		const car = await createCarUseCase.execute({
			name: 'Car Available',
			description: 'Description Car',
			daily_rate: 100,
			license_plate: 'ABCD-1234',
			fine_amount: 60,
			brand: 'brand',
			category_id: 'category',
		});
		console.log(car);

		expect(car.available).toBe(true);
	});
});
