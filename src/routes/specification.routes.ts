import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', async (request, response) => {
	createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', async (request, response) => {
	const specifications = specificationsRepository.list();
	return response.status(200).send(specifications);
});

export { specificationsRoutes };
