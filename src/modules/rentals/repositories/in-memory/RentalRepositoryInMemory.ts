import { Rental } from '@modules/rentals/infra/entities/Rental';

import { IRentalRepository } from '../IRentaRepository';

class RentalRepositoryInMemory implements IRentalRepository {
	rental: Rental[] = [];

	async findOpenRentalByCar(car_id: string): Promise<Rental> {
		return this.rental.find((rental) => rental.car_id === car_id && rental.end_date === null);
	}
	async findOpenRentalByUser(user_id: string): Promise<Rental> {
		return this.rental.find((rental) => rental.user_id === user_id && rental.end_date === null);
	}
}

export { RentalRepositoryInMemory };
