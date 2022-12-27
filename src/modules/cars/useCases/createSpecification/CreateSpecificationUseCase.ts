import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateSpecificationUseCase {
	constructor(
		@inject('SpecificationsRepository')
		private specificationRepository: ISpecificationsRepository,
	) {}
	execute({ name, description }: IRequest) {
		const specificationAlreadyExists =
			this.specificationRepository.findByName(name);
		if (specificationAlreadyExists) {
			throw new Error(`Specification with name${name}already exists`);
		}

		return this.specificationRepository.create({ name, description });
	}
}

export { CreateSpecificationUseCase };
