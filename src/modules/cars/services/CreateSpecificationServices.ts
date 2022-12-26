import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationServices {
	constructor(private specificationRepository: ISpecificationsRepository) {}
	execute({ name, description }: IRequest) {
		return this.specificationRepository.create({ name, description });
	}
}

export { CreateSpecificationServices };
