import { getRepository, Repository } from 'typeorm';

import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = getRepository(User);
	}

	async create(data: ICreateUsersDTO): Promise<void> {
		const { name, driver_license, email, password } = data;

		const user = this.repository.create({ name, driver_license, email, password });

		await this.repository.save(user);
	}

	async findByEmail(email: string): Promise<User> {
		return this.repository.findOne({ email });
	}

	findById(id: string): Promise<User> {
		return this.repository.findOne(id);
	}
}

export { UsersRepository };
