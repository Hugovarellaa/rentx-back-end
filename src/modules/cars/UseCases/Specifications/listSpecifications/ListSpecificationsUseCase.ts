import { inject, injectable } from 'tsyringe';

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
