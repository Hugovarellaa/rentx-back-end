import { CategoriesRepository } from '../repositories/implementations/CategoriesRepository'

interface IRequest {
    name: string
    description: string
}

class CreateCategoriesService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error(`Category already ${name} exists!`)
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoriesService }
