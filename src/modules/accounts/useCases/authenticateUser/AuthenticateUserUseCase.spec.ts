import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUsersUseCase } from '../createUsers/CreateUsersUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let createUsersUseCase: CreateUsersUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('Authenticated user', () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		createUsersUseCase = new CreateUsersUseCase(usersRepositoryInMemory);
		authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
	});
	it('should be able to authenticated an user', async () => {
		const user: ICreateUsersDTO = {
			name: 'User1',
			email: 'user@example.com',
			password: '1234',
			driver_license: 'DFE-1122',
		};

		await createUsersUseCase.execute(user);

		const result = await authenticateUserUseCase.execute({
			email: user.email,
			password: user.password,
		});

		expect(result).toHaveProperty('token');
	});
});
