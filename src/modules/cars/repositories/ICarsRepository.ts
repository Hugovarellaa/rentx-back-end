import { ICreateCarsDTO } from '../dtos/ICreateCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
	create(data: ICreateCarsDTO): Promise<Car>;
	findByLicensesPlate(license_plate: string): Promise<Car>;
	findAllAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]>;
	findById(id: string): Promise<Car>;
}

export { ICarsRepository };
