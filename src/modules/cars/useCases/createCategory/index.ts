import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';
import { CreateCategoryController } from './CreateCategoryController';

const categoriesRepository = new CategoriesRepository();
const createCategoriesUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoriesUseCase);

export { createCategoryController };
