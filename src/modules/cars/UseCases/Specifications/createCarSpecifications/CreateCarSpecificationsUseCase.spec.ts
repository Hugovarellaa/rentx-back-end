import { CreateCarSpecificationsUseCase } from './CreateCarSpecificationsUseCase';

let createCarSpecificationsUseCase: CreateCarSpecificationsUseCase;

describe('Create Car specification ', () => {
	beforeEach(() => {
		createCarSpecificationsUseCase = new CreateCarSpecificationsUseCase();
	});

	it('should be able to add a new specification to the car', () => {});
});
