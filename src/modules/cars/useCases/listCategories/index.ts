import { ListCategoryController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoryRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoryController = new ListCategoryController(
	listCategoriesUseCase,
);

export { listCategoryController };
