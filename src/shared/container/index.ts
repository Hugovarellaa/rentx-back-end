import { container } from 'tsyringe'

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'

// Singleton vai receber o ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository
)
