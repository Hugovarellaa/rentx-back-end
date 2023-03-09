import { RentalRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalRepositoryInMemory';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalRepositoryInMemory;

describe('Create a new Rental', () => {
	beforeEach(() => {
		rentalRepositoryInMemory = new RentalRepositoryInMemory();
		createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory);
	});

	it('should be able to create a new Rental', async () => {
		await createRentalUseCase.execute({
			car_id: '123123123',
			user_id: '321321312',
			expected_return_date: new Date(),
		});
	});
});
