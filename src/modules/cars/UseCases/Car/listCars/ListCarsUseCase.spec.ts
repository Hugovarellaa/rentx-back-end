import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarsUseCase } from './ListCarsUseCase';

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
	});

	it('should be able to list all available cars', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car1',
			description: 'Car Description',
			daily_rate: 1600,
			license_plate: 'DF-1234',
			fine_amount: 520,
			brand: 'Car_Brand',
			category_id: 'category_id',
		});

		const cars = await listCarsUseCase.execute({});

		expect(cars).toEqual([car]);
	});

	it('should be able to list all available cars by name', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car2',
			description: 'Car Description',
			daily_rate: 1600,
			license_plate: 'DF-12344',
			fine_amount: 520,
			brand: 'Car_Brand',
			category_id: 'category_id',
		});

		const cars = await listCarsUseCase.execute({
			name: 'Car2',
		});

		expect(cars).toEqual([car]);
	});
});
