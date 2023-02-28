import { SpecificationRepository } from '../../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationsController } from './CreateSpecificationsController';
import { CreateSpecificationsUseCase } from './CreateSpecificationsUseCase';

const specificationRepository = new SpecificationRepository();
const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationRepository);
const createSpecificationsController = new CreateSpecificationsController(createSpecificationsUseCase);

export { createSpecificationsController };
