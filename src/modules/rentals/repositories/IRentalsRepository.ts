import { ICreateRentalDTO } from '../dtos/CreateRentalDTO';
import { Rental } from '../infra/typeorm/entities/Rental';

interface IRentalsRepository {
	create(data: ICreateRentalDTO): Promise<Rental>;
	findOpenRentalByCar(car_id: string): Promise<Rental>;
	findOpenRentalByUserId(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
