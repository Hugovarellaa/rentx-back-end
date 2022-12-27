import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();
const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', async (request, response) => {
	const specifications = specificationsRepository.list();
	return response.status(200).send(specifications);
});

export { specificationsRoutes };
