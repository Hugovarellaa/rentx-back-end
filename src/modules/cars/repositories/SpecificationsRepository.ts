import { Specification } from '../model/Specification'
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from './implementations/ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[]
    constructor() {
        this.specifications = []
    }
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification()
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        })
        this.specifications.push(specification)
    }
}

export { SpecificationsRepository }
