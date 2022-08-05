import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { User } from '../../entities/User';
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
	findById(id: string): Promise<User> {
		throw new Error('Method not implemented.');
	}
}

export { UsersRepositoryInMemory };
