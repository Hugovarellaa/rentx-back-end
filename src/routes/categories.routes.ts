import { Router } from 'express';

import { CategoriesRepository } from '../repositories/implementations/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const categoryAlreadyExists = categoriesRepository.findByName(name);
	if (categoryAlreadyExists) {
		return response.status(405).json({ error: 'Category already exists' });
	}

	categoriesRepository.create({ name, description });

	return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
	const all = categoriesRepository.findAll();

	return response.json(all);
});

export { categoriesRoutes };
