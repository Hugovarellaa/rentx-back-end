import { IRentalRepository } from '@modules/rentals/repositories/IRentaRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	user_id: string;
	car_id: string;
	expected_return_date: Date;
}

class CreateRentalUseCase {
	constructor(private rentalsRepository: IRentalRepository) {}
	async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<void> {
		const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

		if (carUnavailable) {
			throw new AppError(`Car not available!`);
		}

		const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);
		if (rentalOpenToUser) {
			throw new AppError(`there's a rental in progress for user!`);
		}
	}
}

export { CreateRentalUseCase };
