import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

class CreateCategoriesController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description } = request.body;

		const createCategoriesUseCase = container.resolve(CreateCategoriesUseCase);
		await createCategoriesUseCase.execute({ name, description });

		return response.status(201).send();
	}
}

export { CreateCategoriesController };
