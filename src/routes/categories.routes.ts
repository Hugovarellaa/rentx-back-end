import { Router } from 'express';
import multer from 'multer';

import { createCategoriesController } from '../modules/cars/useCases/Categories/createCategories';
import { importCategoriesController } from '../modules/cars/useCases/Categories/importCategories';
import { listCategoriesController } from '../modules/cars/useCases/Categories/listCategoires';

const categoriesRoutes = Router();
const upload = multer({ dest: 'uploads/' });

categoriesRoutes.post('/', (request, response) => {
	return createCategoriesController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
	importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
