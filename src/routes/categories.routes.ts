import { Response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response): Response => {
	const { name, description } = request.body;

	const categoriesAlreadyExists = categoriesRepository.findByName(name);

	if (categoriesAlreadyExists) {
		return response.status(404).json({ message: 'Categories Already Exists' });
	}

	categoriesRepository.create({ name, description });

	return response.status(201).send();
});

categoriesRoutes.get('/', (request, response): Response => {
	const categoriesAll = categoriesRepository.list();

	return response.json(categoriesAll);
});
export { categoriesRoutes };
