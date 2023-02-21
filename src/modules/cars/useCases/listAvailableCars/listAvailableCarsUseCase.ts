import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
	category_id?: string;
	brand?: string;
	name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
	constructor(
		@inject('CarsRepository')
		private carsRepository: ICarsRepository,
	) {}
	async execute({ category_id, name, brand }: IRequest): Promise<Car[]> {
		const cars = this.carsRepository.findAvailableCar({ category_id, name, brand });
		return cars;
	}
}

export { ListAvailableCarsUseCase };
