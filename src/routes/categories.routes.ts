import { Router } from 'express';
import multer from 'multer';

import { CreateCategoriesController } from '../modules/cars/UseCases/Categories/createCategories/CreateCategoriesController';
import { ImportCategoriesController } from '../modules/cars/UseCases/Categories/importCategories/ImportCategoriesController';
import { ListCategoriesController } from '../modules/cars/UseCases/Categories/listCategories/ListCategoriesController';

const categoriesRoutes = Router();
const createCategoriesController = new CreateCategoriesController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

const upload = multer({ dest: 'uploads/' });

categoriesRoutes.post('/', createCategoriesController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', upload.single('file'), importCategoriesController.handle);

export { categoriesRoutes };
