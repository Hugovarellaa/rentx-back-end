import { Category } from '../model/Category'

interface ICategoriesRepository {
    create(name: string, description: string): void
    list(): Category[]
    findByName(name: string): Category
}

export { ICategoriesRepository }
