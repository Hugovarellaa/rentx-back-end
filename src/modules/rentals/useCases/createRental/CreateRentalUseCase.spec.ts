import dayjs from 'dayjs';

import { RentalRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let dayjsDateProvider: DayjsDateProvider;
let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalRepositoryInMemory;

describe('Create a new Rental', () => {
	const dayAdd24Hours = dayjs().add(1, 'day').toDate();

	beforeEach(() => {
		dayjsDateProvider = new DayjsDateProvider();
		rentalRepositoryInMemory = new RentalRepositoryInMemory();
		createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory, dayjsDateProvider);
	});

	it('should be able to create a new Rental', async () => {
		const rental = await createRentalUseCase.execute({
			car_id: '123123123',
			user_id: '321321312',
			expected_return_date: dayAdd24Hours,
		});
		expect(rental).toHaveProperty('id');
		expect(rental).toHaveProperty('start_date');
	});

	it('should not be able to create a new Rental if there is another open to the same user', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: '123123',
				user_id: '0000',
				expected_return_date: dayAdd24Hours,
			});

			await createRentalUseCase.execute({
				car_id: '123123',
				user_id: '1111',
				expected_return_date: dayAdd24Hours,
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create a new Rental if there is another open to the same car', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: '1111',
				user_id: '0000',
				expected_return_date: dayAdd24Hours,
			});

			await createRentalUseCase.execute({
				car_id: '2222',
				user_id: '0000',
				expected_return_date: dayAdd24Hours,
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create a new rental with invalid return time', async () => {
		expect(async () => {
			await createRentalUseCase.execute({
				car_id: '123',
				user_id: 'test',
				expected_return_date: dayjs().toDate(),
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
