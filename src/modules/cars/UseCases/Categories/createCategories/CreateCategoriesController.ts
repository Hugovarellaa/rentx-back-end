import { Request, Response } from 'express';

import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

class CreateCategoriesController {
	constructor(private createCategoriesUseCase: CreateCategoriesUseCase) {}
	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description } = request.body;

		await this.createCategoriesUseCase.execute({ name, description });

		return response.status(201).send();
	}
}

export { CreateCategoriesController };
