import { Specification } from '../../model/Specification'
import {
    ICreateSpecification,
    ISpecificationRepository
} from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[]
    constructor() {
        this.specifications = []
    }
    create({ name, description }: ICreateSpecification): void {
        const specification = new Specification()
        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })
        this.specifications.push(specification)
    }
}

export { SpecificationsRepository }
