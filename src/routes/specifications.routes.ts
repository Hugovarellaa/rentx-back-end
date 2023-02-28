import { Router } from 'express';

import { createSpecificationsController } from '../modules/cars/useCases/Specifications/createSpecifications';
import { listSpecificationsController } from '../modules/cars/useCases/Specifications/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
	return createSpecificationsController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
	return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
