import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface IFindAvailableCar {
	category_id?: string;
	brand?: string;
	name?: string;
}

interface ICarsRepository {
	create(data: ICreateCarDTO): Promise<Car>;
	findByLicensePlate(license_plate: string): Promise<Car>;
	findAvailableCar({ category_id, name, brand }: IFindAvailableCar): Promise<Car[]>;
}

export { ICarsRepository, IFindAvailableCar };
