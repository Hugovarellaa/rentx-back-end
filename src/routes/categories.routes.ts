import { Response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response): Response => {
	const { name, description } = request.body;

	// const categoriesAlreadyExists = categories.find((category) => category.name === name);

	// if (categoriesAlreadyExists) {
	// 	return response.status(400).json({ message: 'Categories already exists' });
	// }

	categoriesRepository.create({ name, description });

	return response.status(201).send();
});

export { categoriesRoutes };
