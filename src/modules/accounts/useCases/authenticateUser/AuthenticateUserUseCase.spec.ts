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
	it('should be able create an token', () => {});
});
