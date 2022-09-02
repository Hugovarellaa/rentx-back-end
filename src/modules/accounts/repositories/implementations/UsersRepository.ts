import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
	create(data: ICreateUsersDTO): Promise<void> {
		throw new Error('Method not implemented.');
	}
}

export { UsersRepository };
