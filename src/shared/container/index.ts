import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

// (Interface no generic do singleton) ICategoriesRepository / Definir um nome pro container / Class que é chamada quando o nome definido for chamado
container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);
