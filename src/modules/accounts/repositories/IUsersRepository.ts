import { ICreateUsersDTO } from '../dtos/CreateUsersDTO';

interface IUsersRepository {
	create(data: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepository };
