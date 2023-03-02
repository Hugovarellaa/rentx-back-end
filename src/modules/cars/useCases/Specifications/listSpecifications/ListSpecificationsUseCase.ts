import { inject, injectable } from 'tsyringe';

import { Specification } from '../../../entities/Specification';
import { SpecificationRepository } from '../../../repositories/implementations/SpecificationRepository';

@injectable()
class ListSpecificationsUseCase {
	constructor(
		@inject('SpecificationRepository')
		private specificationRepository: SpecificationRepository,
	) {}
	async execute(): Promise<Specification[]> {
		const specification = await this.specificationRepository.findAll();
		return specification;
	}
}

export { ListSpecificationsUseCase };
