import { getRepository, Repository } from 'typeorm';

import { ICreateRentalDTO } from '@modules/rentals/dtos/CreateRentalDTO';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';

import { Rental } from '../entities/Rental';

class RentalsRepository implements IRentalsRepository {
	private repository: Repository<Rental>;

	constructor() {
		this.repository = getRepository(Rental);
	}

	async create(data: ICreateRentalDTO): Promise<Rental> {
		const { car_id, expected_return_date, user_id } = data;

		const rental = this.repository.create({ car_id, expected_return_date, user_id });
		await this.repository.save(rental);

		return rental;
	}

	async findOpenRentalByCar(car_id: string): Promise<Rental> {
		return this.repository.findOne({ car_id });
	}

	async findOpenRentalByUserId(user_id: string): Promise<Rental> {
		return this.repository.findOne({ user_id });
	}
}

export { RentalsRepository };
