import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationsRepository'

// Singleton vai receber o ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository
)

// Singleton vai receber o ISpecificationRepository
container.registerSingleton<ISpecificationRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
)

// Singleton vai receber o IUsersRepository
container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)
