import { Router } from 'express';

import { Category } from '../entities/Category';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const categoriesAlreadyExists = categories.some(
		(category) => category.name === name,
	);
	if (categoriesAlreadyExists) {
		return response.status(400).json({ error: 'Category already exists.' });
	}

	const category = new Category();
	Object.assign(category, { name, description });

	categories.push(category);

	return response.status(201).json(category);
});

export { categoriesRoutes };
