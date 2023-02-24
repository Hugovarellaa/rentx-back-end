import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
	const all = categoriesRepository.findAll();

	return response.json(all);
});

export { categoriesRoutes };
