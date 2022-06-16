import { ICreateCarsDTO } from '../dtos/ICreateCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
	create(data: ICreateCarsDTO): Promise<Car>;
	findByLicensesPlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository };