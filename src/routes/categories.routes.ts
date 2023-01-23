import { Response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response): Response => {
	const { name, description } = request.body;

	const categoriesAlreadyExists = categories.find((category) => category.name === name);
	if (categoriesAlreadyExists) {
		return response.status(400).json({ message: 'Categories already exists' });
	}

	const category = {
		id: uuidV4(),
		name,
		description,
		created_at: new Date(),
	};

	categories.push(category);

	return response.status(201).send();
});

export { categoriesRoutes };
