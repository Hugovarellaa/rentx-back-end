import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { CreateCategoriesServices } from '../modules/cars/services/CreateCategoriesServices';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const createCategoriesServices = new CreateCategoriesServices(categoriesRepository);

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	createCategoriesServices.execute({ name, description });
	return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
	const allCategories = categoriesRepository.list();

	return response.json(allCategories);
});

export { categoriesRoutes };
