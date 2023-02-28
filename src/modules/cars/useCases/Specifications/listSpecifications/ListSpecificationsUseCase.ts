import { Specification } from '../../../entities/Specification';
import { SpecificationRepository } from '../../../repositories/implementations/SpecificationRepository';

class ListSpecificationsUseCase {
	constructor(private specificationRepository: SpecificationRepository) {}
	execute(): Specification[] {
		return this.specificationRepository.findAll();
	}
}

export { ListSpecificationsUseCase };
