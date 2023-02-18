import { Router } from 'express';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

const specificationRoutes = Router();
const createSpecificationController = new CreateCategoryController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post('/', createSpecificationController.handle);

specificationRoutes.get('/', listSpecificationController.handle);

export { specificationRoutes };
