import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
	cars: Car[] = [];

	async create(data: ICreateCarsDTO): Promise<Car> {
		const { brand, category_id, daily_rate, description, fine_amount, license_plate, name } = data;

		const car = new Car();
		Object.assign(car, { brand, category_id, daily_rate, description, fine_amount, license_plate, name });

		this.cars.push(car);

		return car;
	}

	async findByLicensesPlate(license_plate: string): Promise<Car> {
		return this.cars.find((car) => car.license_plate === license_plate);
	}

	async findAllAvailable(): Promise<Car[]> {
		return this.cars;
	}
}

export { CarsRepositoryInMemory };
