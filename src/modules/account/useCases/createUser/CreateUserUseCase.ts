import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/account/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private userRepository: IUsersRepository,
	) {}

	async execute(data: ICreateUserDTO): Promise<void> {
		const { name, email, password, driver_license } = data;

		const userAlreadyExists = await this.userRepository.findByEmail(email);
		if (userAlreadyExists) {
			throw new AppError(`User ${name} already exists`);
		}

		const passwordHas = await hash(password, 8);

		await this.userRepository.create({
			name,
			email,
			password: passwordHas,
			driver_license,
		});
	}
}

export { CreateUserUseCase };
