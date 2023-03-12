import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe('Create Rental', () => {
	beforeEach(() => {
		rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
		createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
	});

	it('should be able to create a new rental', async () => {
		const rental = await createRentalUseCase.execute({
			car_id: '1212',
			user_id: '1212',
			expected_return_date: new Date(),
		});

		expect(rental).toHaveProperty('id');
		expect(rental).toHaveProperty('start_date');
	});

	it('should not be able to create a new rental if there is another open to the same car', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: '1212',
				user_id: 'XXXX',
				expected_return_date: new Date(),
			});
			await createRentalUseCase.execute({
				car_id: '1212',
				user_id: '1212',
				expected_return_date: new Date(),
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create a new rental if there is another open to the same user', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: 'XXXXXX',
				user_id: '123123',
				expected_return_date: new Date(),
			});
			await createRentalUseCase.execute({
				car_id: 'XX',
				user_id: '123123',
				expected_return_date: new Date(),
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
