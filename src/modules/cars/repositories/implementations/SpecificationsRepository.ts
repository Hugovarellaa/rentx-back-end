import { ICreateSpecificationsDTO } from '../../dtos/ICreateSpecificationsDTO';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	specifications: Specification[];

	public static instance: SpecificationsRepository;

	private constructor() {
		this.specifications = [];
	}

	public static getInstance(): SpecificationsRepository {
		if (!SpecificationsRepository.instance) {
			SpecificationsRepository.instance = new SpecificationsRepository();
		}
		return SpecificationsRepository.instance;
	}

	create({ name, description }: ICreateSpecificationsDTO): void {
		const specification = new Specification();
		Object.assign(specification, { name, description });

		this.specifications.push(specification);
	}

	getAll(): Specification[] {
		return this.specifications;
	}
	findByName(name: string): Specification {
		return this.specifications.find((spec) => spec.name === name);
	}
}

export { SpecificationsRepository };
