import { inject, injectable } from 'tsyringe';

import { SpecificationsRepository } from '../../../repositories/implementations/SpecificationsRepository';

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateSpecificationsUseCase {
	constructor(
		@inject('SpecificationsRepository')
		private specificationsRepository: SpecificationsRepository,
	) {}
	async execute({ name, description }: IRequest): Promise<void> {
		const specificationsAlreadyExists = await this.specificationsRepository.findByName(name);

		if (specificationsAlreadyExists) {
			throw new Error(`Specifications already exists`);
		}

		await this.specificationsRepository.create({ name, description });
	}
}

export { CreateSpecificationsUseCase };
