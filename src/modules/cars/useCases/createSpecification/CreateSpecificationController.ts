import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CrateSpecificationController {
	handle(request: Request, response: Response) {
		const { name, description } = request.body;
		const createSpecification = container.resolve(CreateSpecificationUseCase);
		createSpecification.execute({ name, description });

		return response.status(201).send();
	}
}

export { CrateSpecificationController };
