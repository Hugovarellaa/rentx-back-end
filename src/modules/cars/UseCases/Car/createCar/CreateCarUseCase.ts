import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	name: string;
	description: string;
	daily_rato: number;
	license_plate: string;
	fine_amount: number;
	brand: string;
	category_id: string;
}

// @injectable()
class CreateCarUseCase {
	constructor(
		// @inject('CarsRepository')
		private carsRepository: ICarsRepository,
	) {}

	async execute(data: IRequest): Promise<Car> {
		const { name, description, daily_rato, license_plate, fine_amount, brand, category_id } = data;

		const carAlreadyExists = await this.carsRepository.findByLicensesPlate(license_plate);
		if (carAlreadyExists) {
			throw new AppError('Car already exists');
		}

		const car = await this.carsRepository.create({
			name,
			description,
			daily_rato,
			license_plate,
			fine_amount,
			brand,
			category_id,
		});

		return car;
	}
}

export { CreateCarUseCase };
