import { SpecificationRepository } from '../../../repositories/implementations/SpecificationRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationsUseCase {
	constructor(private specificationRepository: SpecificationRepository) {}
	execute({ name, description }: IRequest): void {
		const specificationsAlreadyExists = this.specificationRepository.findByName(name);
		if (specificationsAlreadyExists) {
			throw new Error(`Category ${name} already exists`);
		}

		this.specificationRepository.create({ name, description });
	}
}

export { CreateSpecificationsUseCase };
