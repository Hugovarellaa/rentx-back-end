import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

class ListCarsUseCase {
	constructor(private carsRepository: ICarsRepository) {}
	async execute(): Promise<void> {
		const cars = await this.carsRepository.findAllAvailable();
	}
}

export { ListCarsUseCase };
