import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/implementations/CategoryRepository';
import { createCategoriesController } from '../modules/cars/useCases/Categories/createCategories';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
	return createCategoriesController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	const all = categoryRepository.findAll();
	return response.status(200).json(all);
});

export { categoriesRoutes };
