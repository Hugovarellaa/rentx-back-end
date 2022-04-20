import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	car_id: string;
	specification_id: string[];
}

// @injectable()
class CreateCarSpecificationsUseCase {
	constructor(
		// @inject()
		private carsRepository: ICarsRepository,
	) {}
	async execute({ car_id, specification_id }: IRequest): Promise<void> {
		const carExists = await this.carsRepository.findById(car_id);

		if (!carExists) {
			throw new AppError(`Car not found!`);
		}
	}
}

export { CreateCarSpecificationsUseCase };
