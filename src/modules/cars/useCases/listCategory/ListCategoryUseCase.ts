import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

class ListCategoryUseCase {
	constructor(private specificationsRepository: SpecificationsRepository) {}
	execute() {
		const specification = this.specificationsRepository.list();
		return specification;
	}
}

export { ListCategoryUseCase };
