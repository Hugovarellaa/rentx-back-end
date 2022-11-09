import { SpecificationsRepository } from '../repositories/implementations/SpecificationsRepository'

interface IRequest {
    name
    description
}

class CreateSpecificationService {
    constructor(private specificationRepository: SpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationService }
