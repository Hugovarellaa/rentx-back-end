import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { UsersRepositoryInMemory } from '../../repositories/implementations/in-memory/UsersRepositoryInMemory';
import { CreateUsersUseCase } from '../createUsers/CreateUsersUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUsersUseCase;

describe('Authenticated user', () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		createUserUseCase = new CreateUsersUseCase(usersRepositoryInMemory);
		authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
	});

	it('should be able to authenticate an user', async () => {
		const user: ICreateUsersDTO = {
			name: 'user test',
			email: 'user@example.com',
			password: '1234',
			driver_license: '123456',
		};

		await createUserUseCase.execute(user);

		const result = await authenticateUserUseCase.execute({
			email: user.email,
			password: user.password,
		});

		expect(result).toHaveProperty('token');
	});
});
