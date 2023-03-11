import { Rental } from '@modules/rentals/infra/entities/Rental';
import { IRentalRepository } from '@modules/rentals/repositories/IRentaRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	user_id: string;
	car_id: string;
	expected_return_date: Date;
}

// @injectable()
class CreateRentalUseCase {
	constructor(
		// @inject()
		private rentalsRepository: IRentalRepository,
		// @inject()
		private dateProvider: IDateProvider,
	) {}

	async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<Rental> {
		const compareHours = 24;

		const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

		if (carUnavailable) {
			throw new AppError(`Car not available!`);
		}

		const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);
		if (rentalOpenToUser) {
			throw new AppError(`there's a rental in progress for user!`);
		}

		const dateNow = this.dateProvider.dateNow();

		const compare = this.dateProvider.compareInHours(dateNow, expected_return_date);

		if (compare < compareHours) {
			throw new AppError('Invalid return time!');
		}

		const rental = await this.rentalsRepository.create({
			user_id,
			car_id,
			expected_return_date,
		});

		return rental;
	}
}

export { CreateRentalUseCase };
