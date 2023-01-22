import { Router } from 'express';

import { createCategoriesController } from '../UseCases/Categories/createCategories';
import { listCategoriesController } from '../UseCases/Categories/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
	createCategoriesController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
