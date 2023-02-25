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
		const { name, username, email, password, driver_license } = data;

		const users = this.repository.create({ name, username, email, password, driver_license });

		await this.repository.save(users);
	}
}

export { UsersRepository };
