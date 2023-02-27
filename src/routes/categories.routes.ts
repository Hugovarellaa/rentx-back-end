import { Router } from 'express';

import { Category } from '../entities/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const category = new Category();
	Object.assign(category, { name, description });

	categories.push(category);

	return response.status(201).send();
});

export { categoriesRoutes };
