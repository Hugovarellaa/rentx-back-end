import { Router } from 'express';
import multer from 'multer';

import { createCategoriesController } from '../modules/cars/UseCases/Categories/createCategories';
import { importCategoriesController } from '../modules/cars/UseCases/Categories/importCategories';
import { listCategoriesController } from '../modules/cars/UseCases/Categories/listCategories';

const categoriesRoutes = Router();

const upload = multer({ dest: 'uploads/' });

categoriesRoutes.post('/', (request, response) => {
	createCategoriesController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
	importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
