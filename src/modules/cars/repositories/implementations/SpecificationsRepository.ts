import { Specification } from '../../entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private specifications: Specification[];

	private constructor() {
		this.specifications = [];
	}

	private static instance: SpecificationsRepository;

	public static getInstance(): SpecificationsRepository {
		if (!SpecificationsRepository.instance) {
			SpecificationsRepository.instance = new SpecificationsRepository();
		}
		return SpecificationsRepository.instance;
	}

	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });
		this.specifications.push(specification);
	}
	findByName(name: string): Specification {
		const specification = this.specifications.find((spec) => spec.name === name);
		return specification;
	}
	list(): Specification[] {
		const { specifications } = this;
		return specifications;
	}
}

export { SpecificationsRepository };
