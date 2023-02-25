import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/categories/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '../modules/cars/useCases/categories/importCategories/ImportCategoriesController';
import { ListCategoriesController } from '../modules/cars/useCases/categories/listCategories/ListCategoriesController';

const upload = multer({ dest: 'uploads/' });

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', upload.single('file'), importCategoriesController.handle);

export { categoriesRoutes };
