import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListcategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListcategoriesController(listCategoriesUseCase);

export { listCategoriesController };
