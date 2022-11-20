import { Router } from 'express';

import { createCategoriesController } from '../modules/cars/UseCases/Categories/createCategories';
import { listCategoriesController } from '../modules/cars/UseCases/Categories/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
	createCategoriesController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
