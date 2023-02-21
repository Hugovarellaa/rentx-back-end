import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadCarImagesUseCase } from './UploadCarImagesUseCase';

interface IFiles {
	filename: string;
}

class UploadCarImagesController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const images = request.files as IFiles[];

		const image_name = images.map((file) => file.filename);

		const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);

		await uploadCarImagesUseCase.execute({ car_id: id, image_name });

		return response.status(201).send();
	}
}

export { UploadCarImagesController };
