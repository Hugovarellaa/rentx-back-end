import { Router } from 'express';

import { createSpecificationsController } from '../UseCases/Specifications/createSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
	createSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
