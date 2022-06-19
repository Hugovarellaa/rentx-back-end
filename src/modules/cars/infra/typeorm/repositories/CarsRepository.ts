import { getRepository, Repository } from 'typeorm';

import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
	private repository: Repository<Car>;

	constructor() {
		this.repository = getRepository(Car);
	}

	create(data: ICreateCarsDTO): Promise<Car> {
		throw new Error('Method not implemented.');
	}
	async findByLicensesPlate(license_plate: string): Promise<Car> {
		return this.repository.findOne({ license_plate });
	}
}

export { CarsRepository };
