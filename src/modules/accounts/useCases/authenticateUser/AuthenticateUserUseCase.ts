import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: {
		name: string;
		email: string;
	};
	token: string;
}

@injectable()
class AuthenticateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: UsersRepository,
	) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		// User exists
		const user = await this.usersRepository.findByEmail(email);
		if (!user) {
			throw new AppError(`Email or Password not incorrect`);
		}

		// Password they are the same
		const passwordMatch = await compare(password, user.password);
		if (!passwordMatch) {
			throw new AppError(`Email or Password not incorrect`);
		}

		// create jsonwebtoken
		const token = sign({}, 'supersecret123', {
			subject: user.id,
			expiresIn: '1d',
		});

		const tokenReturn: IResponse = {
			user: {
				name: user.name,
				email: user.email,
			},
			token,
		};

		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };
