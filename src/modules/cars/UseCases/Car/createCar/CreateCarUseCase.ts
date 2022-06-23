import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

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

	async execute(data: IRequest) {
		const { name, description, daily_rato, license_plate, fine_amount, brand, category_id } = data;

		await this.carsRepository.create({ name, description, daily_rato, license_plate, fine_amount, brand, category_id });
	}
}

export { CreateCarUseCase };
