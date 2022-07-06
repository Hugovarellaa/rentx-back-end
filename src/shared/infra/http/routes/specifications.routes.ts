import { Router } from 'express';

import { CreateSpecificationsController } from '@modules/cars/UseCases/Specifications/createSpecifications/CreateSpecificationsController';
import { ListSpecificationsController } from '@modules/cars/UseCases/Specifications/listSpecifications/ListSpecificationsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationsRoutes = Router();

const listSpecificationsController = new ListSpecificationsController();
const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post('/', createSpecificationsController.handle);

specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
