import { Category } from '../model/Category'

// DTO -> Data Transfer Object
interface ICreateCategoryDTO {
    name: string
    description: string
}

class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category: Category = new Category()
        Object.assign(category, { name, description, create_ad: new Date() })

        this.categories.push(category)
    }
    async list(): Promise<Category[]> {
        return this.categories
    }
}

export { CategoriesRepository }
