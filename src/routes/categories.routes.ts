import { Router } from 'express';

import { createCategoriesController } from '../modules/cars/useCases/Categories/createCategories';
import { listCategoriesController } from '../modules/cars/useCases/Categories/listCategoires';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
	return createCategoriesController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
