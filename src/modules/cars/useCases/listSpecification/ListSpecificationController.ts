import { Request, Response } from 'express';

import { ListCategoryUseCase } from '../listCategory/ListCategoryUseCase';

class ListSpecificationController {
	constructor(private listCategoryUseCase: ListCategoryUseCase) {}

	handle(request: Request, response: Response) {
		const specification = this.listCategoryUseCase.execute();
		return response.json(specification);
	}
}

export { ListSpecificationController };
