import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const specificationsAlreadyExists = specificationRepository.findByName(name);
	if (specificationsAlreadyExists) {
		throw new Error(`Category ${name} already exists`);
	}

	specificationRepository.create({ name, description });

	return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
	const all = specificationRepository.findAll();
	return response.status(200).json(all);
});

export { specificationsRoutes };
