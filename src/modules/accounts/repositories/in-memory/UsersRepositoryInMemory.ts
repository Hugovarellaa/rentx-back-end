import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
	users: User[] = [];

	async create(data: ICreateUsersDTO): Promise<void> {
		const { email, password, name, driver_license, avatar, id } = data;

		const user = new User();
		Object.assign(user, { email, password, name, driver_license, avatar, id });

		this.users.push(user);
	}
	findByEmail(email: string): Promise<User> {
		throw new Error('Method not implemented.');
	}
	findById(id: string): Promise<User> {
		throw new Error('Method not implemented.');
	}
}

export { UsersRepositoryInMemory };
