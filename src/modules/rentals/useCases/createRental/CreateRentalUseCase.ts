import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	car_id: string;
	user_id: string;
	expected_return_date: Date;
}

class CreateRentalUseCase {
	constructor(private rentalsRepository: IRentalsRepository) {}

	async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<void> {
		const carNotAvailable = await this.rentalsRepository.findOpenRentalByCar(car_id);
		if (carNotAvailable) {
			throw new AppError(`Car not available`);
		}

		const user = await this.rentalsRepository.findOpenRentalByUserId(user_id);
		if (user) {
			throw new AppError(`There's a rental in progress for user!`);
		}
	}
}

export { CreateRentalUseCase };
