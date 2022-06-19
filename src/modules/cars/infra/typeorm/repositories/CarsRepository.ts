import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
	create(data: ICreateCarsDTO): Promise<Car> {
		throw new Error('Method not implemented.');
	}
	findByLicensesPlate(license_plate: string): Promise<Car> {
		throw new Error('Method not implemented.');
	}
}

export { CarsRepository };
