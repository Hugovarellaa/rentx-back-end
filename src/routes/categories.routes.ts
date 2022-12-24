import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

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

	const category = {
		id: uuidV4(),
		name,
		description,
		created_at: new Date(),
	};

	categories.push(category);

	return response.status(201).json(category);
});

export { categoriesRoutes };
