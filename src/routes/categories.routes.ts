import { Router } from 'express'

import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoriesService } from '../services/CreateCategoriesService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createCategoryServices = new CreateCategoriesService(
        categoriesRepository
    )

    createCategoryServices.execute({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list()

    return response.json(all)
})

export { categoriesRoutes }
