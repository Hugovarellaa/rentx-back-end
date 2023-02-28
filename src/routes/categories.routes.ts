import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/implementations/CategoryRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const categoriesAlreadyExists = categoryRepository.findByName(name);
	if (categoriesAlreadyExists) {
		throw new Error(`Category ${name} already exists`);
	}

	categoryRepository.create({ name, description });

	return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
	const all = categoryRepository.findAll();
	return response.status(200).json(all);
});

export { categoriesRoutes };
