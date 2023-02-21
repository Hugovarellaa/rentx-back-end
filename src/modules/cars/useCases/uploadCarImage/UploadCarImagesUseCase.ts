import { inject, injectable } from 'tsyringe';

import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';

interface IRequest {
	car_id: string;
	image_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
	constructor(
		@inject('CarsImagesRepository')
		private carsRespository: ICarsImagesRepository,
	) {}
	async execute({ car_id, image_name }: IRequest): Promise<void> {
		image_name.map(async (image) => {
			await this.carsRespository.create(car_id, image);
		});
	}
}

export { UploadCarImagesUseCase };
