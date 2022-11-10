import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'

const upload = multer({ dest: 'uploads/' })

const categoriesRoutes = Router()
const createCategoryController = new CreateCategoryController()
const importCategoriesController = new ImportCategoriesController()
const listCategoryController = new ListCategoriesController()

categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.get('/', listCategoryController.handle)

categoriesRoutes.post(
    '/import',
    upload.single('file'),
    importCategoriesController.handle
)

export { categoriesRoutes }
