import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

class ListSpecificationUseCase {
	constructor(private specificationsRepository: SpecificationsRepository) {}
	execute() {
		const specification = this.specificationsRepository.list();
		return specification;
	}
}

export { ListSpecificationUseCase };
