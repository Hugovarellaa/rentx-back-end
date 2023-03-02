import { Router } from 'express';

import { CreateSpecificationsController } from '../modules/cars/useCases/Specifications/createSpecifications/CreateSpecificationsController';
import { ListSpecificationsController } from '../modules/cars/useCases/Specifications/listSpecifications/ListSpecificationsController';

const specificationsRoutes = Router();

const listSpecificationsController = new ListSpecificationsController();
const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.post('/', createSpecificationsController.handle);
specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
