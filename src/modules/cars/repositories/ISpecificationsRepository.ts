import { Specification } from '../model/Specification'

// DTO -> Data Transfer Object
interface ICreateSpecification {
    name: string
    description: string
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecification): void
    findByName(name: string): Specification
}

export { ICreateSpecification, ISpecificationRepository }
