import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationsUseCase } from './CreateCarSpecificationsUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationsUseCase: CreateCarSpecificationsUseCase;

describe('Create Car specification ', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		createCarSpecificationsUseCase = new CreateCarSpecificationsUseCase(carsRepositoryInMemory);
	});

	it('should be able to add a new specification to the car', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car Test',
			description: 'Description Test',
			daily_rate: 12600,
			license_plate: 'DFE-33963258',
			fine_amount: 520,
			brand: 'Brand Test',
			category_id: 'Category Test',
		});

		const specification_id = ['3131'];

		await createCarSpecificationsUseCase.execute({ car_id: car.id, specification_id });
	});

	it('should not be able to add a new specification to a non-exists car', async () => {
		expect(async () => {
			const car_id = '123';
			const specification_id = ['323121'];

			await createCarSpecificationsUseCase.execute({ car_id, specification_id });
		}).rejects.toBeInstanceOf(AppError);
	});
});