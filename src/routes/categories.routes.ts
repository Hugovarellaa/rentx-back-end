import { Response, Router } from 'express';

import { Category } from '../entities/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response): Response => {
	const { name, description } = request.body;

	const categoriesAlreadyExists = categories.find((category) => category.name === name);
	if (categoriesAlreadyExists) {
		return response.status(400).json({ message: 'Categories already exists' });
	}

	const category: Category = new Category();

	Object.assign(category, { name, description, created_at: new Date() });
	categories.push(category);

	return response.status(201).json({ category });
});

export { categoriesRoutes };
