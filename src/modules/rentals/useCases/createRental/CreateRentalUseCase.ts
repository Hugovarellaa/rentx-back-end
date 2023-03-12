import { inject, injectable } from 'tsyringe';

import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	car_id: string;
	user_id: string;
	expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {
	constructor(
		@inject('RentalsRepository')
		private rentalsRepository: IRentalsRepository,

		@inject('DayjsDateProvider')
		private dayjsDateProvider: IDateProvider,
	) {}

	async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<Rental> {
		const carNotAvailable = await this.rentalsRepository.findOpenRentalByCar(car_id);
		if (carNotAvailable) {
			throw new AppError(`Car not available`);
		}

		const user = await this.rentalsRepository.findOpenRentalByUserId(user_id);
		if (user) {
			throw new AppError(`There's a rental in progress for user!`);
		}

		const dateNow = this.dayjsDateProvider.dateNow();
		const compare = this.dayjsDateProvider.compareInHours(dateNow, expected_return_date);
		if (compare < 24) {
			throw new AppError(`The rental must have a minimum duration of 24 hours.`);
		}

		const rental = await this.rentalsRepository.create({
			car_id,
			user_id,
			expected_return_date,
		});

		return rental;
	}
}

export { CreateRentalUseCase };
