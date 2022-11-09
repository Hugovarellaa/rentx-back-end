import { Category } from '../model/Category'

interface ICreateCategoryDTO {
    name: string
    description: string
}

class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    async create({ name, description }: ICreateCategoryDTO) {
        const category: Category = new Category()
        Object.assign(category, { name, description, create_ad: new Date() })

        this.categories.push(category)
    }
}

export { CategoriesRepository }
