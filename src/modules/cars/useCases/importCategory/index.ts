import { ImportCategryController } from './ImportCategoryController'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

const importCategoryUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategryController(
    importCategoryUseCase
)

export { importCategoryController }
