import { inject, injectable } from 'tsyringe';

import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

@injectable()
class ListSpecificationUseCase {
	constructor(
		@inject('SpecificationsRepository')
		private specificationsRepository: SpecificationsRepository,
	) {}

	async execute() {
		const specification = await this.specificationsRepository.list();
		return specification;
	}
}

export { ListSpecificationUseCase };
