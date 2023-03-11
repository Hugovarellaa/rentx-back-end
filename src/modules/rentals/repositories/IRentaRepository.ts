import { ICreateRentalDTO } from '../dtos/CretaRentalDTO';
import { Rental } from '../infra/entities/Rental';

interface IRentalRepository {
	create(data: ICreateRentalDTO): Promise<Rental>;
	findOpenRentalByCar(car_id: string): Promise<Rental>;
	findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalRepository };
