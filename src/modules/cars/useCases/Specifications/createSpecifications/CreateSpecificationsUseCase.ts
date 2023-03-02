import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../../errors/AppError';
import { SpecificationRepository } from '../../../repositories/implementations/SpecificationRepository';

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateSpecificationsUseCase {
	constructor(
		@inject('SpecificationRepository')
		private specificationRepository: SpecificationRepository,
	) {}
	async execute({ name, description }: IRequest): Promise<void> {
		const specificationsAlreadyExists = await this.specificationRepository.findByName(name);
		if (specificationsAlreadyExists) {
			throw new AppError(`Category ${name} already exists`);
		}

		await this.specificationRepository.create({ name, description });
	}
}

export { CreateSpecificationsUseCase };
