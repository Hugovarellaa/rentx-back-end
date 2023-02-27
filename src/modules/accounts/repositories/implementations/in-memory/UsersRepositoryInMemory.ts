import { ICreateUsersDTO } from '../../../dtos/CreateUsersDTO';
import { User } from '../../../entities/User';
import { IUsersRepository } from '../../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
	users: User[] = [];

	async create(data: ICreateUsersDTO): Promise<void> {
		const { name, email, password, driver_license, avatar, id } = data;
		const user = new User();
		Object.assign(user, { name, email, password, driver_license, avatar, id });
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
