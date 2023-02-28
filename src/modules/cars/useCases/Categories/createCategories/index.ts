import { CategoryRepository } from '../../../repositories/implementations/CategoryRepository';
import { CreateCategoriesController } from './CreateCategoriesController';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

const categoryRepository = CategoryRepository.getInstance();
const createCategoriesUseCase = new CreateCategoriesUseCase(categoryRepository);
const createCategoriesController = new CreateCategoriesController(createCategoriesUseCase);

export { createCategoriesController };
