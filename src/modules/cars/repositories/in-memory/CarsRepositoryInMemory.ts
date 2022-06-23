import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
	cars: Car[] = [];

	async create(data: ICreateCarsDTO): Promise<void> {
		const { brand, category_id, daily_rato, description, fine_amount, license_plate, name } = data;

		const car = new Car();
		Object.assign(car, { brand, category_id, daily_rato, description, fine_amount, license_plate, name });

		this.cars.push(car);
	}
}

export { CarsRepositoryInMemory };
