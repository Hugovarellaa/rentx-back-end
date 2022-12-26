import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {});

categoriesRoutes.get('/', (request, response) => {
	const categories = categoriesRepository.list();

	return response.status(200).json(categories);
});

export { categoriesRoutes };
