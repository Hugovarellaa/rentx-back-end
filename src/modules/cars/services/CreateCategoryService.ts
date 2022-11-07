import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface IRequest {
    name: string
    description: string
}

class CreateCategoryService {
    constructor(private categoriesRepositories: CategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoriesAlreadyExists =
            this.categoriesRepositories.findByName(name)

        if (categoriesAlreadyExists) {
            throw new Error(`Cannot create category`)
        }

        this.categoriesRepositories.create({ name, description })
    }
}

export { CreateCategoryService }
