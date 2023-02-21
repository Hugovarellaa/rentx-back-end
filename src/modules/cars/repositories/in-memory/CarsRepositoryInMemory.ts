import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository, IFindAvailableCar } from '../ICarsRepository';

class CarRepositoryInMemory implements ICarsRepository {
	cars: Car[] = [];

	async create(data: ICreateCarDTO): Promise<Car> {
		const { name, description, daily_rate, license_plate, fine_amount, brand, category_id } = data;
		const car = new Car();
		Object.assign(car, { name, description, daily_rate, license_plate, fine_amount, brand, category_id });

		this.cars.push(car);

		return car;
	}

	async findByLicensePlate(license_plate: string): Promise<Car> {
		return this.cars.find((car) => car.license_plate === license_plate);
	}

	async findAvailableCar({ category_id, name, brand }: IFindAvailableCar): Promise<Car[]> {
		const carsAvailable = this.cars.filter((car) => {
			if (
				car.available === true ||
				(brand && car.brand === brand) ||
				(category_id && car.category_id === category_id) ||
				(name && car.name === name)
			) {
				return car;
			}
			return null;
		});

		return carsAvailable;
	}
}

export { CarRepositoryInMemory };
