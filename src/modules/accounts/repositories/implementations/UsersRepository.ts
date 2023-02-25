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
		const { name, email, password, driver_license, avatar, id } = data;

		const users = this.repository.create({ name, email, password, driver_license, avatar, id });

		await this.repository.save(users);
	}
	async findByEmail(email: string): Promise<User> {
		return this.repository.findOne({ email });
	}

	async findById(id: string): Promise<User> {
		return this.repository.findOne(id);
	}
}

export { UsersRepository };
