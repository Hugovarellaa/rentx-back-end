import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationsRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe('Create Car Specifications', () => {
	beforeEach(() => {
		carRepositoryInMemory = new CarRepositoryInMemory();
		specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();

		createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
			carRepositoryInMemory,
			specificationsRepositoryInMemory,
		);
	});

	it('should not be able to add a new specification to a now-existent car', async () => {
		expect(async () => {
			const car_id = '1234';
			const specification_id = ['55432'];
			await createCarSpecificationUseCase.execute({ car_id, specification_id });
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should be able to add a new specification to the car', async () => {
		const car = await carRepositoryInMemory.create({
			name: 'Name Car',
			description: 'Description Car',
			daily_rate: 100,
			license_plate: 'ABC-1234',
			fine_amount: 60,
			brand: 'brand',
			category_id: 'category',
		});

		const specification = await specificationsRepositoryInMemory.create({
			name: 'Name test',
			description: 'Description test',
		});

		const specification_id = [specification.id];
		const specificationCars = await createCarSpecificationUseCase.execute({ car_id: car.id, specification_id });

		expect(specificationCars).toHaveProperty('specifications');
		expect(specificationCars.specifications.length).toBe(1);
	});
});
