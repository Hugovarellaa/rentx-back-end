import { AppError } from '@errors/AppError';
import { ICreateUsersDTO } from '@modules/accounts/dtos/CreateUsersDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';

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

	it('should not be able to authenticate an non-existent user', () => {
		expect(async () => {
			await authenticateUserUseCase.execute({
				email: 'false@gmail.com',
				password: '123',
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to authenticate with incorrect password', () => {
		expect(async () => {
			const user: ICreateUsersDTO = {
				driver_license: 'XXX',
				email: 'teste@gmail.com',
				password: 'testpassword',
				name: 'User Teste error',
			};

			await createUsersUseCase.execute(user);

			await authenticateUserUseCase.execute({
				email: user.email,
				password: 'incorrect password',
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
