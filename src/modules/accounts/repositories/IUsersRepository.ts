import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<void>;
	findByEmail(email: string): Promise<ICreateUserDTO | undefined>;
}

export { IUsersRepository };
