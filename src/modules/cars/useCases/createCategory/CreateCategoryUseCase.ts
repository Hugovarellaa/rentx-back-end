import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

interface IRequest {
    name: string
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepositories: CategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoriesAlreadyExists =
            this.categoriesRepositories.findByName(name)

        if (categoriesAlreadyExists) {
            throw new Error(`Category ${name} already exists `)
        }

        this.categoriesRepositories.create({ name, description })
    }
}

export { CreateCategoryUseCase }
