import { hash } from 'bcryptjs';
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
		const { name, email, password, driver_license } = data;

		const passwordHash = await hash(password, 8);

		await this.usersRepository.create({ name, email, password: passwordHash, driver_license });
	}
}

export { CreateUsersUseCase };
