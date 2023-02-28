import { SpecificationRepository } from '../../../repositories/implementations/SpecificationRepository';
import { ListSpecificationsController } from './ListSpecificationsController';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

const specificationRepository = new SpecificationRepository();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController };
