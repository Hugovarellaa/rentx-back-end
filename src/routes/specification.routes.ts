import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationServices } from '../modules/cars/services/CreateSpecificationServices';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', async (request, response) => {
	const { name, description } = request.body;

	const createSpecificationServices = new CreateSpecificationServices(
		specificationsRepository,
	);
	createSpecificationServices.execute({ name, description });

	return response.status(201).send();
});

export { specificationsRoutes };
