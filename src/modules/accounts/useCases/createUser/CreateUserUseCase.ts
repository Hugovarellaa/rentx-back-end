import { inject, injectable } from 'tsyringe';

import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: UsersRepository,
	) {}
	async execute(data: ICreateUsersDTO) {
		const { name, username, email, password, driver_license } = data;

		await this.usersRepository.create({ name, username, email, password, driver_license });
	}
}

export { CreateUserUseCase };
