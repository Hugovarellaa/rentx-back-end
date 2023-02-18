import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController';
import { ListCategoryController } from '../modules/cars/useCases/listCategory/ListCategoryController';

const categoriesRoutes = Router();
const upload = multer({ dest: 'uploads/' });

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoriesController = new ImportCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), importCategoriesController.handle);

export { categoriesRoutes };
