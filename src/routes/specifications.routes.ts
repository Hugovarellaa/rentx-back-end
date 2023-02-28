import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { createSpecificationsController } from '../modules/cars/useCases/Specifications/createSpecifications';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
	return createSpecificationsController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
	const all = specificationRepository.findAll();
	return response.status(200).json(all);
});

export { specificationsRoutes };
