import { getRepository, Repository } from 'typeorm';

import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
	private repository: Repository<Car>;

	constructor() {
		this.repository = getRepository(Car);
	}

	async create(data: ICreateCarsDTO): Promise<Car> {
		const { brand, category_id, daily_rate, description, fine_amount, license_plate, name } = data;
		const car = this.repository.create({
			brand,
			category_id,
			daily_rate,
			description,
			fine_amount,
			license_plate,
			name,
		});

		await this.repository.save(car);

		return car;
	}

	async findByLicensesPlate(license_plate: string): Promise<Car> {
		return this.repository.findOne({ license_plate });
	}

	async findAllAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
		const carsQuery = await this.repository
			.createQueryBuilder('c')
			.where('available = :available', { available: true });

		if (brand) {
			carsQuery.andWhere('c.brand = :brand', { brand });
		}

		if (name) {
			carsQuery.andWhere('c.name = :name', { name });
		}

		if (category_id) {
			carsQuery.andWhere('c.category_id = :category_id', { category_id });
		}

		const cars = await carsQuery.getMany();

		return cars;
	}
}

export { CarsRepository };
