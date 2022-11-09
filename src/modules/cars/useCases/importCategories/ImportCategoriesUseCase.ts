import { parse as csvParse } from 'csv-parse'
import fs from 'fs'

import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

interface IIMportCategory {
    name: string
    description: string
}

class ImportCategoriesUseCase {
    constructor(private categoryRepository: CategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IIMportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IIMportCategory[] = []

            const stream = fs.createReadStream(file.path)

            const parseFile = csvParse()

            stream.pipe(parseFile)

            parseFile
                .on('data', async (line) => {
                    const [name, description] = line
                    categories.push({
                        name,
                        description
                    })
                })
                .on('end', () => {
                    fs.promises.unlink(file.path)
                    resolve(categories)
                })
                .on('error', (err) => {
                    reject(err)
                })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)

        categories.map(async (category) => {
            const { name, description } = category
            const categoryExists = this.categoryRepository.findByName(name)
            if (!categoryExists) {
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportCategoriesUseCase }
