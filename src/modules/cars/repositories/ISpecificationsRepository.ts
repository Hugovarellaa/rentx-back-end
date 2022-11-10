import { Specification } from '../entities/Specification'

// DTO -> Data Transfer Object
interface ICreateSpecification {
    name: string
    description: string
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecification): Promise<void>
    findByName(name: string): Promise<Specification>
}

export { ICreateSpecification, ISpecificationRepository }
