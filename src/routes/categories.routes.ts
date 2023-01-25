import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController';
import { ListcategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const uploadAvatar = multer(uploadConfig.upload('./uploads'));

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();
const listCategoriesController = new ListcategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.post('/import', uploadAvatar.single('file'), importCategoriesController.handle);

export { categoriesRoutes };
