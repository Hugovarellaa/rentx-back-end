import { getRepository, Repository } from 'typeorm';

import { ICreateUsersDTO } from '@modules/accounts/dtos/CreateUsersDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = getRepository(User);
	}

	async create(data: ICreateUsersDTO): Promise<void> {
		const { name, driver_license, email, password, avatar, id } = data;

		const user = this.repository.create({ name, driver_license, email, password, avatar, id });

		await this.repository.save(user);
	}

	async findByEmail(email: string): Promise<User> {
		return this.repository.findOne({ email });
	}

	async findById(id: string): Promise<User> {
		return this.repository.findOne(id);
	}
}

export { UsersRepository };
