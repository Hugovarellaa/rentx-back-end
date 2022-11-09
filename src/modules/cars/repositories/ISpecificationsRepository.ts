// DTO -> Data Transfer Object
interface ICreateSpecification {
    name: string
    description: string
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecification): void
}

export { ICreateSpecification, ISpecificationRepository }
