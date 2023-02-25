import { Router } from 'express';

import { ensureAuthentication } from '../middleware/ensureAuthentication';
import { CreateSpecificationController } from '../modules/cars/useCases/specifications/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthentication);
specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
