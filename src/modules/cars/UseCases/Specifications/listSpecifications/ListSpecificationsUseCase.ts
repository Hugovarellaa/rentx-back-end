import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
	constructor(
		@inject('SpecificationsRepository')
		private specificationsRepository: ISpecificationsRepository,
	) {}

	async execute(): Promise<Specification[]> {
		return this.specificationsRepository.getAll();
	}
}

export { ListSpecificationsUseCase };
