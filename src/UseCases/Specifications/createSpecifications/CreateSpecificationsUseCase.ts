import { SpecificationsRepository } from '../../../repositories/implementations/SpecificationsRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationsUseCase {
	constructor(private specificationsRepository: SpecificationsRepository) {}
	execute({ name, description }: IRequest) {
		const specificationsAlreadyExists = this.specificationsRepository.findByName(name);

		if (specificationsAlreadyExists) {
			throw new Error(`Specifications already exists`);
		}

		this.specificationsRepository.create({ name, description });
	}
}

export { CreateSpecificationsUseCase };
