import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { ListCategoryUseCase } from '../listCategory/ListCategoryUseCase';
import { ListSpecificationController } from './ListSpecificationController';

const specificationsRepository = new SpecificationsRepository();
const listCategoryUseCase = new ListCategoryUseCase(specificationsRepository);
const listSpecificationController = new ListSpecificationController(listCategoryUseCase);

export { listSpecificationController };
