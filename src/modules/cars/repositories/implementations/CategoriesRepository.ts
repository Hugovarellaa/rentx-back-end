import { getRepository, Repository } from 'typeorm';

class CategoriesRepository implements ICategoriesRepository {
	repository: Repository<Category>;

	constructor() {
		this.repository = getRepository(Category);
	}

	async create(data: ICreateCategoriesDTO): Promise<void> {
		const { name, description } = data;
		const category = this.repository.create({ name, description });
		console.log('Create   Categories');
		await this.repository.save(category);
	}

	async getAll(): Promise<Category[]> {
		return this.repository.find();
	}
	async findByName(name: string): Promise<Category> {
		return this.repository.findOne({ name });
	}
}

export { CategoriesRepository };
