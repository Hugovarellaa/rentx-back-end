import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.get('/', (request, response) => {
	return response.json({ message: 'OK' });
});

export { categoriesRoutes };
