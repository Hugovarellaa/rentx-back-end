import { ICreateUsersDTO } from '@modules/accounts/dtos/CreateUsersDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
	users: User[] = [];

	async create(data: ICreateUsersDTO): Promise<void> {
		const { email, password, name, driver_license } = data;

		const user = new User();
		Object.assign(user, { email, password, name, driver_license });

		this.users.push(user);
	}
	async findByEmail(email: string): Promise<User> {
		return this.users.find((user) => user.email === email);
	}
	async findById(id: string): Promise<User> {
		return this.users.find((user) => user.id === id);
	}
}

export { UsersRepositoryInMemory };
