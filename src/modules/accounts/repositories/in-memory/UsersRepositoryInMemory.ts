import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
	users: User[] = [];

	async create(data: ICreateUsersDTO): Promise<void> {
		throw new Error('Method not implemented.');
	}
	findByEmail(email: string): Promise<User> {
		throw new Error('Method not implemented.');
	}
	findById(id: string): Promise<User> {
		throw new Error('Method not implemented.');
	}
}

export { UsersRepositoryInMemory };
