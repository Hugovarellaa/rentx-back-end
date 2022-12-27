import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// ICategoriesRepository -> singleton
container.registerSingleton<ICategoryRepository>(
	'CategoriesRepository',
	CategoriesRepository,
);

// ISpecificationsRepository -> singleton
container.registerSingleton<ISpecificationsRepository>(
	'SpecificationsRepository',
	SpecificationsRepository,
);
