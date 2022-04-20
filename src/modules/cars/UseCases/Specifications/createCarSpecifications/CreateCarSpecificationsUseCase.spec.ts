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
		const car_id = '123';
		const specification_id = ['323121'];

		await createCarSpecificationsUseCase.execute({ car_id, specification_id });
	});

	it('should not be able to add a new specification to a non-exists car', async () => {
		expect(async () => {
			const car_id = '123';
			const specification_id = ['323121'];

			await createCarSpecificationsUseCase.execute({ car_id, specification_id });
		}).rejects.toBeInstanceOf(AppError);
	});
});
