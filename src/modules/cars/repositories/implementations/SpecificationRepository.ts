import { ICreateCategoriesDTO } from '../../dtos/CreateCategoriesDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
	private specifications: Specification[];

	public static instance: SpecificationRepository;

	private constructor() {
		this.specifications = [];
	}

	public static getInstance(): SpecificationRepository {
		if (!SpecificationRepository.instance) {
			SpecificationRepository.instance = new SpecificationRepository();
		}
		return SpecificationRepository.instance;
	}

	create({ name, description }: ICreateCategoriesDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });

		this.specifications.push(specification);
	}

	findAll(): Specification[] {
		return this.specifications;
	}

	findByName(name: string): Specification {
		const specificationAlreadyExists = this.specifications.find((c) => c.name === name);
		return specificationAlreadyExists;
	}
}

export { SpecificationRepository };
