import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

@injectable()
class CreateUsersUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: UsersRepository,
	) {}
	async execute(data: ICreateUserDTO): Promise<void> {
		const { name, email, password, driver_license } = data;
		await this.usersRepository.create({ name, email, password, driver_license });
	}
}

export { CreateUsersUseCase };
