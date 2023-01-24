import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CrateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CrateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
