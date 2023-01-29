import { Router } from 'express';

import { Category } from '../entities/Category';
import { createCategoriesController } from '../UseCases/Categories/createCategories';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
	createCategoriesController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	const allCategories = categories;
	return response.status(200).json(allCategories);
});

export { categoriesRoutes };
