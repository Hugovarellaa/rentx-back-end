import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListcategoriesController {
	handle(request: Request, response: Response): Response {
		const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
		const allCategories = listCategoriesUseCase.execute();

		return response.json(allCategories);
	}
}

export { ListcategoriesController };
