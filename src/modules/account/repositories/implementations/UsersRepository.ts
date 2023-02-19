import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/account/dtos/ICreateUserDTO';
import { User } from '@modules/account/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = getRepository(User);
	}

	async create(data: ICreateUserDTO): Promise<void> {
		const { id, avatar, name, email, password, driver_license } = data;
		const user = this.repository.create({ id, avatar, name, email, password, driver_license });
		await this.repository.save(user);
	}

	async findByEmail(email: string): Promise<User> {
		const user = await this.repository.findOne({ email });
		return user;
	}

	async findById(id: string): Promise<User> {
		const user = await this.repository.findOne(id);
		return user;
	}
}

export { UsersRepository };
