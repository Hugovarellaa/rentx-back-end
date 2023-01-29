import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';
import { CreateCategoriesController } from './CreateCategoriesController';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

const categoriesRepositories = new CategoriesRepository();
const createCategoriesUseCase = new CreateCategoriesUseCase(categoriesRepositories);
const createCategoriesController = new CreateCategoriesController(createCategoriesUseCase);

export { createCategoriesController };
