import dayjs from 'dayjs';

import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe('Create Rental', () => {
	const dayAdd24Hours = dayjs().add(1, 'day').toDate();
	beforeEach(() => {
		dayjsDateProvider = new DayjsDateProvider();
		rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
		createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory, dayjsDateProvider);
	});

	it('should be able to create a new rental', async () => {
		const rental = await createRentalUseCase.execute({
			car_id: '1212',
			user_id: '1212',
			expected_return_date: dayAdd24Hours,
		});

		expect(rental).toHaveProperty('id');
		expect(rental).toHaveProperty('start_date');
	});

	it('should not be able to create a new rental if there is another open to the same car', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: '1212',
				user_id: 'XXXX',
				expected_return_date: dayAdd24Hours,
			});
			await createRentalUseCase.execute({
				car_id: '1212',
				user_id: '1212',
				expected_return_date: dayAdd24Hours,
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create a new rental if there is another open to the same user', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: 'XXXXXX',
				user_id: '123123',
				expected_return_date: dayAdd24Hours,
			});
			await createRentalUseCase.execute({
				car_id: 'XX',
				user_id: '123123',
				expected_return_date: dayAdd24Hours,
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create a new rental with invalid return time', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: 'XX',
				user_id: '123123',
				expected_return_date: dayjs().toDate(),
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
