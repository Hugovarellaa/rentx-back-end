import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository'

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationService {
    constructor(
        private createSpecificationRepository: ISpecificationsRepository
    ) {}
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExist =
            this.createSpecificationRepository.findByName(name)

        if (specificationAlreadyExist) {
            throw new Error(`Specification ${name} already exists `)
        }
        this.createSpecificationRepository.create({ name, description })
    }
}

export { CreateSpecificationService }
