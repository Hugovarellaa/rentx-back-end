import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryServices } from '../services/CreateCategoryServices';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const createCategoryServices = new CreateCategoryServices(
		categoriesRepository,
	);
	createCategoryServices.execute({ name, description });

	return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
	const categories = categoriesRepository.list();

	return response.status(200).json(categories);
});

export { categoriesRoutes };
