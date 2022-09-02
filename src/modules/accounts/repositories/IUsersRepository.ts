import { ICreateUsersDTO } from '../dtos/CreateUsersDTO';

interface IUsersRepository {
	create(data: ICreateUsersDTO): void;
}

export { IUsersRepository };
