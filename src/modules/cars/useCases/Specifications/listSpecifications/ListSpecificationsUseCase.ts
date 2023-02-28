import { SpecificationRepository } from '../../../repositories/implementations/SpecificationRepository';

class ListSpecificationsUseCase {
	constructor(private specificationRepository: SpecificationRepository) {}
	execute() {
		return this.specificationRepository.findAll();
	}
}

export { ListSpecificationsUseCase };
