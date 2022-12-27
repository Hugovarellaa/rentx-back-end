import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

// ICategoriesRepository -> singleton
container.registerSingleton<ICategoryRepository>(
	'CategoriesRepository',
	CategoriesRepository,
);
