import { hash } from 'bcryptjs';
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
		const { name, email, password, driver_license } = data;

		const emailAlreadyExists = await this.usersRepository.findByEmail(email);
		if (emailAlreadyExists) {
			throw new Error(`User - ${email} already exists`);
		}

		const passwordHash = await hash(password, 8);

		await this.usersRepository.create({
			name,
			email,
			password: passwordHash,
			driver_license,
		});
	}
}

export { CreateUserUseCase };
