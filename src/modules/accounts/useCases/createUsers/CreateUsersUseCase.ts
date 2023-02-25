import { inject, injectable } from 'tsyringe';

import { ICreateUsersDTO } from '../../dtos/CreateUsersDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUsersUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository,
	) {}
	async execute(data: ICreateUsersDTO): Promise<void> {
		const { name, username, email, password, driver_license } = data;

		await this.usersRepository.create({ name, username, email, password, driver_license });
	}
}

export { CreateUsersUseCase };
