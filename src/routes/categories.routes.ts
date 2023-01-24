import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const upload = multer({ dest: 'uploads/' });

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
	return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), importCategoriesController.handle);

export { categoriesRoutes };
