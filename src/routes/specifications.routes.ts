import { Router } from 'express';

import { createSpecificationsController } from '../UseCases/Specifications/createSpecifications';
import { listSpecificationsController } from '../UseCases/Specifications/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
	createSpecificationsController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
	listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
