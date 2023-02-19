import { ICreateUserDTO } from '@modules/account/dtos/ICreateUserDTO';
import { User } from '@modules/account/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
	users: User[] = [];
	async create(data: ICreateUserDTO): Promise<void> {
		const { email, name, password, driver_license } = data;
		const user = new User();

		Object.assign(user, { email, name, password, driver_license });
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
