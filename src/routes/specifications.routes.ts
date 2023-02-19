import { Router } from 'express';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();
const specificationRoutes = Router();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post('/', createSpecificationController.handle);
specificationRoutes.get('/', listSpecificationController.handle);

export { specificationRoutes };
