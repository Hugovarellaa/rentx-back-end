import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoryRepository = CategoriesRepository.getInstance()
const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoryController = new ListCategoriesController(listCategoryUseCase)

export { listCategoryController }
