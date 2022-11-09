import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface IRequest {
    name: string
    description: string
}

class CreateCategoriesService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error()
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoriesService }
