import { ICreateRentalDTO } from '@modules/rentals/dtos/CreateRentalDTO';
import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';

import { IRentalsRepository } from '../IRentalsRepository';

class RentalsRepositoryInMemory implements IRentalsRepository {
	rentals: Rental[] = [];

	async create(data: ICreateRentalDTO): Promise<Rental> {
		const { car_id, user_id, expected_return_date } = data;

		const rental = new Rental();
		Object.assign(rental, {
			car_id,
			user_id,
			expected_return_date,
			start_date: new Date(),
		});
		this.rentals.push(rental);

		return rental;
	}

	async findOpenRentalByCar(car_id: string): Promise<Rental> {
		return this.rentals.find((rental) => rental.car_id === car_id && !rental.end_date);
	}
	async findOpenRentalByUserId(user_id: string): Promise<Rental> {
		return this.rentals.find((rental) => rental.user_id === user_id && !rental.end_date);
	}
}

export { RentalsRepositoryInMemory };
