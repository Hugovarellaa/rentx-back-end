import { Request, Response } from 'express';

class ImportCategoriesController {
	handle(request: Request, response: Response) {
		const { file } = request;

		return response.json(file);
	}
}

export { ImportCategoriesController };
