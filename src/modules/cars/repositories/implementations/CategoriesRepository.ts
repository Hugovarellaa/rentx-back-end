import { Category } from '../../model/Category'
import {
    ICategoriesRepository,
    ICreateCategoryDTO
} from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category: Category = new Category()
        Object.assign(category, { name, description, created_ad: new Date() })

        this.categories.push(category)
    }
    list(): Category[] {
        return this.categories
    }
    findByName(name: string): Category {
        const categories = this.categories.find(
            (category) => category.name === name
        )
        return categories
    }
}

export { CategoriesRepository }
