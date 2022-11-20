import { Router } from 'express';

import { createSpecificationsController } from '../modules/cars/UseCases/Specifications/createSpecifications';
import { listSpecificationsController } from '../modules/cars/UseCases/Specifications/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
	createSpecificationsController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
	listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
