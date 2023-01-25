import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/account/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/account/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// (Interface no generic do singleton) ICategoriesRepository / Definir um nome pro container / Class que é chamada quando o nome definido for chamado
container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);

// (Interface no generic do singleton) ISpecificationsRepository / Definir um nome pro container / Class que é chamada quando o nome definido for chamado
container.registerSingleton<ISpecificationsRepository>('SpecificationsRepository', SpecificationsRepository);

// (Interface no generic do singleton) IUsersRepository / Definir um nome pro container / Class que é chamada quando o nome definido for chamado
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
