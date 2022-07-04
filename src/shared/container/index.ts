import { container } from 'tsyringe';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);

container.registerSingleton<ISpecificationsRepository>('SpecificationsRepository', SpecificationsRepository);

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
