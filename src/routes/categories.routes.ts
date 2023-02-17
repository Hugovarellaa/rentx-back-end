import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { CreateCategoriesService } from '../modules/cars/service/CreateCategoriesService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const createCategoriesService = new CreateCategoriesService(categoriesRepository);
	createCategoriesService.execute({ name, description });

	return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
	const categories = categoriesRepository.list();
	return response.json(categories);
});

export { categoriesRoutes };
