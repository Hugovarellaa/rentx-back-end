import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoryController } from '../modules/cars/useCases/listCategories'

const upload = multer({ dest: 'uploads/' })

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
    return listCategoryController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
    const { file } = request

    return response.json(file)
})

export { categoriesRoutes }
