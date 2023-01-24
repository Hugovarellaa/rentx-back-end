import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListcategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListcategoriesController(listCategoriesUseCase);

export { listCategoriesController };
