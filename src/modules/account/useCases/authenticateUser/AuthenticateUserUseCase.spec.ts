import { AppError } from '@errors/AppError';
import { ICreateUserDTO } from '@modules/account/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/account/repositories/in-memory/UsersRepositoryInMemory';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
		createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
	});

	it('should be able to authenticate an user', async () => {
		const user: ICreateUserDTO = {
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

	it('should not be able to authenticate an not existing user', async () => {
		expect(async () => {
			await authenticateUserUseCase.execute({
				email: 'false@example.com',
				password: '1234',
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to authenticate with incorrect password', async () => {
		expect(async () => {
			const user: ICreateUserDTO = {
				name: 'user 1',
				email: 'user@example.com',
				password: '1234',
				driver_license: '999',
			};

			await createUserUseCase.execute(user);

			await authenticateUserUseCase.execute({
				email: user.email,
				password: 'incorrectPassword',
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});