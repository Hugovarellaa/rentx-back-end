import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/service/CreateSpecificationService';

const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const createSpecificationService = new CreateSpecificationService(specificationsRepository);
});

export { specificationRoutes };
