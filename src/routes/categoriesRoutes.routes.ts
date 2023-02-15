import { Router } from 'express';

import { CategoriesRepository } from '../repositories/implementations/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;
	categoriesRepository.create({ name, description });
	return response.send();
});

categoriesRoutes.get('/', (request, response) => {
	const categoriesAll = categoriesRepository.list();

	return response.json(categoriesAll);
});

export { categoriesRoutes };
