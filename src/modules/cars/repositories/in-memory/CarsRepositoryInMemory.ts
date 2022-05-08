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

	async findAllAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
		const all = this.cars.filter((car) => {
			if (
				car.available === true ||
				(brand && car.brand === brand) ||
				(name && car.name === name) ||
				(category_id && car.category_id === category_id)
			) {
				return car;
			}
			return null;
		});
		return all;
	}
}

export { CarsRepositoryInMemory };
