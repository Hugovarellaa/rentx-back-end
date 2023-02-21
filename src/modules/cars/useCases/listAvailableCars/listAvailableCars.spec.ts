import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './listAvailableCarsUseCase';

let listAvailableCars: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarRepositoryInMemory;

describe('List Cars', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarRepositoryInMemory();
		listAvailableCars = new ListAvailableCarsUseCase(carsRepositoryInMemory);
	});

	it('should be able to list all available cars', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car2',
			description: 'Car description',
			daily_rate: 100,
			license_plate: 'ADFA-123',
			fine_amount: 60,
			brand: 'Car_brand',
			category_id: 'Category_id',
		});

		const cars = await listAvailableCars.execute({});

		expect(cars).toEqual([car]);
	});

	it('should be able to list all available cars by brand', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car2',
			description: 'Car description',
			daily_rate: 100,
			license_plate: 'ADFA-123',
			fine_amount: 60,
			brand: 'Car_brand_test',
			category_id: 'Category_id',
		});

		const cars = await listAvailableCars.execute({
			brand: 'Car_brand_test',
		});

		expect(cars).toEqual([car]);
	});

	it('should be able to list all available cars by name', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car3',
			description: 'Car description',
			daily_rate: 100,
			license_plate: 'ADFA-12345',
			fine_amount: 60,
			brand: 'Car_brand_test',
			category_id: 'Category_id',
		});

		const cars = await listAvailableCars.execute({
			name: 'Car3',
		});

		expect(cars).toEqual([car]);
	});

	it('should be able to list all available cars by category', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car3',
			description: 'Car description',
			daily_rate: 100,
			license_plate: 'ADFA-1234567',
			fine_amount: 60,
			brand: 'Car_brand_test',
			category_id: '12456',
		});

		const cars = await listAvailableCars.execute({
			category_id: '12456',
		});

		expect(cars).toEqual([car]);
	});
});
