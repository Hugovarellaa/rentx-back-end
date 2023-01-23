import { Response, Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response): Response => {
	return response.status(201).send();
});

export { categoriesRoutes };
