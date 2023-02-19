import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

@injectable()
class ListSpecificationUseCase {
	constructor(
		@inject('SpecificationsRepository')
		private specificationsRepository: ISpecificationsRepository,
	) {}

	async execute() {
		const specification = await this.specificationsRepository.list();
		return specification;
	}
}

export { ListSpecificationUseCase };
