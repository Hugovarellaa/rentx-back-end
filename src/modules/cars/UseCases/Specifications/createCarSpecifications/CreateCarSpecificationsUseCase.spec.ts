import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { CreateCarSpecificationsUseCase } from './CreateCarSpecificationsUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationsUseCase: CreateCarSpecificationsUseCase;

describe('Create Car specification ', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		createCarSpecificationsUseCase = new CreateCarSpecificationsUseCase(carsRepositoryInMemory);
	});

	it('should be able to add a new specification to the car', () => {});
});
